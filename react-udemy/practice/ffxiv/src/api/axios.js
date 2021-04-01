import axios from "axios";

const KEY = "f9260c55683c42c1966132a0cb28f757fd9ebb8614494792a6eaa944a4110b34";

export default axios.create({
  baseURL: "https://xivapi.com",
  private_key: KEY,
});
