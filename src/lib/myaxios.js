import axios from "axios";

const instance = axios.create({
  baseURL: "https://cpf2wwxl.api.lncldglobal.com"
});

instance.defaults.headers.common["X-LC-Id"] =
  "Cpf2WwXlCtm8RsJf1Lx1x7GH-MdYXbMMI";
instance.defaults.headers.common["X-LC-Key"] = "QIF146hm8wfIYVeTTjOviPBm";
instance.defaults.headers.common["Content-Type"] = "application/json";

export default instance;
