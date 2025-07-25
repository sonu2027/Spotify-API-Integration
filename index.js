import dotenv from "dotenv";
import app from "./src/app.js";

dotenv.config({
  path: "/.env",
});

app.get("/", (req, res) => {
  res.send(
    `<h1>Server is running at http://127.0.0.1:${process.env.PORT}</h1>`
  );
});

app.listen(process.env.PORT || 7000, () => {
  console.log(
    `⚙️ Server is running at http://127.0.0.1:${process.env.PORT || 7000}`
  );
});
