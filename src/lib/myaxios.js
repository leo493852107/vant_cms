import axios from "axios";

const instance = axios.create({
  baseURL: "https://api2.bmob.cn"
});

instance.defaults.headers.common["X-Bmob-Application-Id"] = "XXX";
instance.defaults.headers.common["X-Bmob-REST-API-Key"] = "XXX";
instance.defaults.headers.common["Content-Type"] = "application/json";

export default instance;
