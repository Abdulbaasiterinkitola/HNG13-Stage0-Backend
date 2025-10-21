import axios from 'axios';
import express from 'express';
import cors from 'cors';
import { configDotenv } from 'dotenv';

configDotenv();
const app = express();

app.use(cors());

app.get('/me', async (req, res) => {
  let catFact = 'Could not fetch a cat fact at this time.';

  try {
    const response = await axios.get('https://catfact.ninja/fact', { timeout: 5000 });
    catFact = response.data.fact;
  } catch (error) {
    console.error('Error fetching cat fact:', error.message);
  }

  const profileData = {
    status: 'success',
    user: {
      email: process.env.MY_EMAIL,
      name: process.env.MY_NAME,
      stack: process.env.MY_STACK,
    },
    timestamp: new Date().toISOString(),
    fact: catFact,
  };

  res.status(200).json(profileData);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});