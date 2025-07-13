import axios from "axios";
import { getAccessToken } from "../services/spotify.service.js";

export const getTopTracks = async (req, res) => {
  try {
    const accessToken = await getAccessToken();
    const response = await axios.get(
      "https://api.spotify.com/v1/me/top/tracks?limit=10",
      {
        headers: { Authorization: `Bearer ${accessToken}` },
      }
    );

    const tracks = response.data.items.map((track) => ({
      id: track.id,
      name: track.name,
      artists: track.artists.map((artist) => artist.name).join(", "),
      uri: track.uri,
    }));

    res.json(tracks);
  } catch (err) {
    console.error("Top tracks error:", err.response?.data || err.message);
    res.status(500).send("Failed to fetch top tracks");
  }
};

export const getNowPlaying = async (req, res) => {
  try {
    const accessToken = await getAccessToken();
    const response = await axios.get(
      "https://api.spotify.com/v1/me/player/currently-playing",
      {
        headers: { Authorization: `Bearer ${accessToken}` },
      }
    );

    if (response.status === 204) return res.json({ isPlaying: false });

    const track = response.data.item;

    res.json({
      name: track.name,
      artists: track.artists.map((a) => a.name).join(", "),
      isPlaying: response.data.is_playing,
      uri: track.uri,
    });
  } catch (err) {
    console.error("Now playing error:", err.response?.data || err.message);
    res.status(500).send("Failed to fetch now playing track");
  }
};

export const playTrack = async (req, res) => {
  const { id } = req.params;
  try {
    const accessToken = await getAccessToken();
    await axios.put(
      "https://api.spotify.com/v1/me/player/play",
      { uris: [`spotify:track:${id}`] },
      { headers: { Authorization: `Bearer ${accessToken}` } }
    );

    res.json({ message: `Playing track ${id}` });
  } catch (err) {
    console.error("Play track error:", err.response?.data || err.message);
    res.status(500).send("Failed to play track");
  }
};

export const pauseTrack = async (req, res) => {
  try {
    const accessToken = await getAccessToken();
    await axios.put(
      "https://api.spotify.com/v1/me/player/pause",
      {},
      {
        headers: { Authorization: `Bearer ${accessToken}` },
      }
    );

    res.json({ message: "Playback paused" });
  } catch (err) {
    console.error("Pause error:", err.response?.data || err.message);
    res.status(500).send("Failed to pause playback");
  }
};
