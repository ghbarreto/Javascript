import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID H7MASXgxc68wVpIykkuoBj-pag2fbeOV-9a19hGDNMs",
  },
});
