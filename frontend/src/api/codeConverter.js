import axios from "axios";

export async function convertCode({ source_code, source_lang, target_lang }) {
  const response = await axios.post("https://codeconverter-232y.onrender.com/convert", {
    source_code,
    source_lang,
    target_lang,
  });
  return response.data.output;
}