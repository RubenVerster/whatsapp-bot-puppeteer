# Puppeteer and Chrome
## allow puppeteer to use the current open browser
To allow this bot to use an exisiting WA window, open your start menu and then search for Chrome
Then right-click on Chrome and then press 'Open file location'
Right-click the Google Chrome shortcut and go to 'Properties'
In the 'Target' attribute, add the following after the string:
--remote-debugging-port=9222

Should look something like this: 
"C:\Program Files\Google\Chrome\Application\chrome.exe" --remote-debugging-port=9222

This allows Puppeteer to access the current open browser

# Person To Message
## This is the person you want to send a message to

In the person const, add the name of the person in there exactly as it is in your WhatsApp's contact name
The personAfterMsg const is used to target a different chat so that you don't stay in the chat of the person you are sending messages to

# More Jokes
## Expand on the current jokes list

Simply add your jokes to the funnyJokes array. Make sure they are properly formatted in a string. You can also use the backslash to escape any single quotes within the string ( it\'s )

!!!
Please do not use the escape sequence for a new line in the string for a joke ( \n )
This will cause the messenger to send the message instead of going to the next line :)

If you want an extensive list of jokes I have collected and formatted for this bot, send me an email :P
rrverster31415@gmail.com

# Scheduled Messages
## Send messges at specified times

I used the node-cron package to execute functions at certain times of the day.
Read the docs for this package if you want to create more intricate cron jobs for this bot and to find the correct format for your timezone
https://www.npmjs.com/package/node-cron