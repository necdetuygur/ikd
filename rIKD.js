import MatchAll from "./rMatchAll.js";
import axios from "axios";

const Get = async () => {
  const { data } = await axios.get(
    "http://www.ikd.sadearge.com/Firma/tablo.php"
  );
  return Parse(data);
};

const Parse = (s) => {
  let data = {};
  const gram = MatchAll(s, /row6_satis(.*?)>(.*?)<\/td>/gim);
  const ceyrek = MatchAll(s, /row11_satis(.*?)>(.*?)<\/td>/gim);
  const yarim = MatchAll(s, /row12_satis(.*?)>(.*?)<\/td>/gim);
  const Tarih = MatchAll(s, /tarih(.*?)>(.*?)<\/span>/gim);
  if (gram[2] != undefined && ceyrek[2] != undefined && yarim[2] != undefined) {
    data["Tarih"] = Tarih[2]
      .trim()
      .replace(/Son Güncellenme Tarihi : /gi, "")
      .replace(/SonDeğişiklik/gi, "")
      .trim();
    data["Gram"] = gram[2].trim();
    data["Ceyrek"] = ceyrek[2].trim();
    data["Yarim"] = yarim[2].trim();
    data["Tam"] = parseInt(data["Yarim"]) * 2 + ",00";
  }
  return data;
};

export default { Get };
