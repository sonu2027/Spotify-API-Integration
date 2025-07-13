import { Router } from "express";
import { exchangeCodeForToken } from "../services/spotify.service.js";
import {
  getTopTracks,
  getNowPlaying,
  playTrack,
  pauseTrack,
} from "../controllers/spotify.controller.js";

const router = Router();

// To getting refresh and access token
// router.get("/", async (req, res) => {
//   const { code } = req.query;
//   if (!code) return res.status(400).send("Authorization code missing");

//   console.log("code: ", code);

//   try {
//     const tokenData = await exchangeCodeForToken(code);
//     res.json({
//       access_token: tokenData.access_token,
//       refresh_token: tokenData.refresh_token,
//     });
//   } catch (error) {
//     console.error(
//       "Token exchange failed:",
//       error.response?.data || error.message
//     );
//     res.status(500).send("Error during token exchange");
//   }
// });

router.get("/top-tracks", getTopTracks);
router.get("/now-playing", getNowPlaying);
router.put("/play/:id", playTrack);
router.put("/pause", pauseTrack);

export default router;

// This is for to generate access token and refresh token by pasting this below link in browser
// https://accounts.spotify.com/authorize?client_id=c8816480443243bd813e4f5afe27d818&response_type=code&redirect_uri=http://127.0.0.1:7000/spotify&scope=user-read-playback-state user-read-currently-playing user-top-read user-modify-playback-state
