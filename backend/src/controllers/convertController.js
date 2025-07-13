// const { callHuggingFace } =require('../services/huggingfaceService');

// exports.convertCode = async(req,res) => {
//     const { source_code , source_lang , target_lang } =req.body;
//     try{
//         const prompt=`Convert the following ${source_lang} code to ${target_lang}:\n\n${source_code}`;
//         const output=await callHuggingFace(prompt);
//         res.json({ output });
//     }catch(err){
//         res.status(500).json({error : 'Conversion failed', details:err.message});
//     }
// };

const { callPerplexity } = require('../services/perplexityService');

exports.convertCode = async (req, res) => {
  const { source_code, source_lang, target_lang } = req.body;
  try {
    const prompt = `Convert the following ${source_lang} code to ${target_lang}. Only return the ${target_lang} code, no explanation, no comments:\n\n${source_code}`;
    // const prompt = `Convert the following ${source_lang} code to ${target_lang}:\n\n${source_code}`;
    const output = await callPerplexity(prompt);
    res.json({ output });
  } catch (err) {
    res.status(500).json({ error: 'Conversion failed', details: err.message });
  }
};
