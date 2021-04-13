import axios from "axios";

export const marketboard = axios.create({
  baseURL: "https://universalis.app/api/Behemoth/",
});

export const marketables = axios.create({
  baseURL: "https://universalis.app/api/marketable",
});
