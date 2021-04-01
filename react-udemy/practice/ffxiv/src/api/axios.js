import axios from "axios";

const KEY = "f9260c55683c42c1966132a0cb28f757fd9ebb8614494792a6eaa944a4110b34";

export default axios.create({
  baseURL: "https://xivapi.com",
  private_key: KEY,
  params: {},
  pagination: {
    page: 1,
    page_next: 2,
    page_prev: false,
    page_total: 94,
    results: 250,
    results_per_page: 2333,
    results_total: 23500,
  },
});
