const axios = require('axios');
require('dotenv').config();

const PERPLEXITY_API_KEY = process.env.PERPLEXITY_API_KEY;

exports.callPerplexity = async (prompt) => {
  try {
    const response = await axios.post(
      'https://api.perplexity.ai/chat/completions',
      {
        model: 'sonar', // Or another Perplexity model
        messages: [
          {
            role: 'system',
            content: 'You are a helpful code-conversion assistant.',
          },
          {
            role: 'user',
            content: prompt,
          },
        ],
        // temperature: 0.2,
        // max_tokens: 500,
      },
      {
        headers: {
          Authorization: `Bearer ${PERPLEXITY_API_KEY}`,
          'Content-Type': 'application/json',
        },
      }
    );

    return response.data.choices[0].message.content.trim();
  } catch (err) {
    console.error('❌ Perplexity API Error:', err.response?.data || err.message);
    throw new Error(err.message || 'Unknown Perplexity API error');
  }
};
