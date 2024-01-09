import express from 'express';
import fetch from 'node-fetch';

const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/checkStreamStatus', async (req, res) => {
  try {
    const response = await fetch('https://www.twitch.tv/Quoirky');
    const text = await response.text();

    if (text.includes('"isLiveBroadcast":true')) {
      res.send('Quoirky is live');
    } else {
      res.send('Quoirky is not live');
    }
  } catch (error) {
    console.error('Error fetching Twitch page:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
