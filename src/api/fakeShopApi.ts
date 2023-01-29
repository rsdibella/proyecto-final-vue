import axios from "axios";
// import { AxiosHeaders } from "axios";

const fakeShopApi = axios.create({
  baseURL: "https://api.escuelajs.co/api/v1",
});

export default fakeShopApi;
