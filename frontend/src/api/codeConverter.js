import axios from "axios";

export async function convertCode({ source_code, source_lang, target_lang }) {
  const response = await axios.post("http://localhost:5000/convert", {
    source_code,
    source_lang,
    target_lang,
  });
  return response.data.output;
}