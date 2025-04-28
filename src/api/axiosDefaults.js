import axios from "axios";

axios.defaults.baseURL =
  "https://moments-walkthrough-a-665f9f6a608c.herokuapp.com/";
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
axios.defaults.withCredentials = true;
