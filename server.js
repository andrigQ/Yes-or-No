require('dotenv').config();
const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

app.post('/ask', async (req, res) => {
    const { question } = req.body;

    try {
        const response = await axios.post(
            'https://api.openai.com/v1/chat/completions',
            {
                model: "gpt-3.5-turbo",
                messages: [
                    { role: "system", content: "You are a mystical magic 8 ball who answers in short, clever, or mysterious ways." },
                    { role: "user", content: `Magic 8 Ball, ${question}` }
                ],
                max_tokens: 50,
                temperature: 0.9
            },
            {
                headers: {
                    'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
                    'Content-Type': 'application/json'
                }
            }
        );

        res.json({ answer: response.data.choices[0].message.content.trim() });
    } catch (err) {
        console.error(err.response?.data || err.message);
        res.status(500).json({ error: 'Error contacting OpenAI' });
    }
});

app.listen(3000, () => console.log('🧠 Magic 8 Ball AI server running at http://localhost:3000'));
