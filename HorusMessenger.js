const puppeteer = require('puppeteer');
var cron = require('node-cron');

const jokes = require('./messages/jokes');

function delay(time) {
  return new Promise(function (resolve) {
    setTimeout(resolve, time);
  });
}

(async () => {
  //this is the person you want to send the messages to
  const person = '';
  //a contact to go to after sending a message
  const personAfterMsg = '';

  //helper function that sends a message
  const sendMessage = async (chosenMessage) => {
    const message = chosenMessage;

    await page.click(`[title="${person}"]`);
    await delay(555);

    console.log(`Found  ${person}`);
    const editor = await page.$$('._13NKt');
    await editor[1].focus();
    await delay(555);
    console.log('Clicked The Text Bar');

    page.keyboard.type(message);

    await delay(5555);
    await page.click("[data-testid='send']");
    await delay(555);
    console.log('Message sent! :D');
    await page.click(`[title="${personAfterMsg}"]`);
    await delay(555);
  };
  const sendJoke = async () => {
    let randomSelection = Math.floor(Math.random() * jokes.length);

    await page.click(`[title="${person}"]`);
    await delay(555);

    console.log(`Found  ${person}`);
    const editor = await page.$$('._13NKt');
    await editor[1].focus();
    await delay(555);
    console.log('Clicked The Text Bar');

    page.keyboard.type(jokes[randomSelection]);

    await delay(7777);
    await page.click("[data-testid='send']");
    await delay(777);
    console.log('Joke sent! XP');
    console.log(jokes[randomSelection]);
    await page.click(`[title="${personAfterMsg}"]`);
    await delay(555);
  };

  //cronological message sends based off of a certain time of day
  //  # ┌────────────── second (optional)
  //  # │ ┌──────────── minute
  //  # │ │ ┌────────── hour
  //  # │ │ │ ┌──────── day of month
  //  # │ │ │ │ ┌────── month
  //  # │ │ │ │ │ ┌──── day of week
  //  # │ │ │ │ │ │
  //  # │ │ │ │ │ │
  //  # * * * * * *
  // https://www.npmjs.com/package/node-cron

  //08:08
  cron.schedule(
    '8 8 * * *',
    async () => {
      await sendMessage('Carpe motherfucking diem the shit out of today XP');
    },
    {
      scheduled: true,
      timezone: 'Africa/Windhoek',
    }
  );
  //11:11
  cron.schedule(
    '11 11 * * *',
    async () => {
      await sendMessage('Hey');
    },
    {
      scheduled: true,
      timezone: 'Africa/Windhoek',
    }
  );
  //13:01 (01:01 PM)
  cron.schedule(
    '1 13 * * *',
    async () => {
      await sendMessage('Hope your day has been going well so far 😊');
    },
    {
      scheduled: true,
      timezone: 'Africa/Windhoek',
    }
  );
  //15:03 (03:03 PM)
  cron.schedule(
    '3 15 * * *',
    async () => {
      await sendJoke();
    },
    {
      scheduled: true,
      timezone: 'Africa/Windhoek',
    }
  );
  //16:04 (04:04 PM)
  cron.schedule(
    '4 16 * * *',
    async () => {
      await sendMessage('ERROR: Message Not Found...');
    },
    {
      scheduled: true,
      timezone: 'Africa/Windhoek',
    }
  );
  //17:55 (5:55 PM)
  cron.schedule(
    '55 17 * * *',
    async () => {
      await sendJoke();
    },
    {
      scheduled: true,
      timezone: 'Africa/Windhoek',
    }
  );
  //20:08 (08:08 PM)
  cron.schedule(
    '8 20 * * *',
    async () => {
      await sendMessage('Sleep well');
    },
    {
      scheduled: true,
      timezone: 'Africa/Windhoek',
    }
  );

  //connects to your current open chrome window
  const browser = await puppeteer.connect({
    browserURL: `http://localhost:9222`,
    defaultViewport: null,
  });
  console.log('Opened Browser');

  const page = await browser.newPage();
  await page.goto('https://web.whatsapp.com');
  await delay(17171);
  console.log('Opened WA');
  console.log('Waiting for Cron Jobs :D');
  sendMessage('Carpe motherfucking diem the shit out of today! XP');
})();
