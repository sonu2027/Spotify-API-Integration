# 🎵 Spotify API Integration — Developer Portfolio Feature

This project integrates the Spotify API into your portfolio site using Node.js (Express) and TypeScript React. It allows visitors to view your top tracks, see what you're currently listening to, and even control playback — if they're Spotify Premium users.

---

## 🔗 Live Demo

Visit Portfolio: [https://sonumondal.vercel.app/spotify]
Visit Backend URL: [https://spotify-api-integration-portfolio.vercel.app]

---

## 🚀 Features

- ✅ View current playing song
- ✅ Fetch your top 10 Spotify tracks
- ✅ Play any top track 
- ✅ Pause or resume currently playing song 
- ✅ Backend deployed with Express and frontend on Vite + TypeScript

---

## 📦 Backend Routes

These routes are served by the Express backend and interact with Spotify's Web API:

| Method | Route                         | Description                                 |
|--------|-------------------------------|---------------------------------------------|
| `GET`  | `/spotify/top-tracks`         | Returns top 10 Spotify tracks as JSON       |
| `GET`  | `/spotify/now-playing`        | Returns currently playing track info        |
| `PUT`  | `/spotify/play/:id`           | Plays selected track by ID (Premium only)   |
| `PUT`  | `/spotify/pause`              | Pauses playback (Premium only)              |

---

## ⚙️ How to Use Locally

### 1️⃣ Clone the Repo

```bash
git clone https://github.com/sonu2027/Spotify-API-Integration.git
cd spotify-api-integration
