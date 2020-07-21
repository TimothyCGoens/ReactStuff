import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com/",
  headers: {
    Authorization:
      "Client-ID 5b474e4204b5653a71db0e8df5e3494aa956c1678c63208400401c450cea6696",
  },
});
