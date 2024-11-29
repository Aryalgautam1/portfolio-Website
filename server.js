const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());

app.post('/api/chat', async (req, res) => {
    const message = req.body.message;
    try {
        const response = await axios.post(
            'https://api.openai.com/v1/engines/davinci-codex/completions',
            {
                prompt: message,
                max_tokens: 150,
            },
            {
                headers: {
                    'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
                },
            }
        );
        res.json(response.data.choices[0].text);
    } catch (error) {
        res.status(500).send('Error communicating with OpenAI API');
    }
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
