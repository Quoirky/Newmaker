import fetch from 'https://quoirky.com/node_modules/node-fetch/node-fetch.js';

const channelName = 'Quoirky';

async function checkStreamStatus() {
  try {
    const response = await fetch(`https://www.twitch.tv/${channelName}`);
    const text = await response.text();

    if (text.includes('"isLiveBroadcast":true')) {
      console.log(`${channelName} is live`);
    } else {
      console.log(`${channelName} is not live`);
    }
  } catch (error) {
    console.error('Error fetching Twitch page:', error);
  }
}

checkStreamStatus();
