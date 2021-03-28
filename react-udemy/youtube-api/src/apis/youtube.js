import axios from "axios";

const KEY = "AIzaSyAryN36a3kel3XXOrbF6sbFPG54mgvXX8I";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    type: "video",
    key: KEY,
  },
});
