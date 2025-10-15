````markdown
# myid-bot

A simple Telegram bot written in TypeScript that returns the user's Telegram ID.

## Features

- Responds to `/start` with a greeting message.
- Responds to `/myid` with the user's Telegram ID.
- Replies to unknown commands with a default message.

## Requirements

- Node.js v16+  
- npm  
- Telegram Bot Token (from [@BotFather](https://t.me/BotFather))

## Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/myid-bot.git
cd myid-bot
````

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file in the project root:

```
BOT_TOKEN=your_telegram_bot_token
```

## Usage

Run the bot in development mode:

```bash
npm run dev
```

* The bot should start and log:

```
🤖 myid-bot started...
```

* Open Telegram and send messages to your bot:

  * `/start` → Greeting message
  * `/myid` → Your Telegram ID
  * Any other text → "I only understand /start and /myid"

## Project Structure

```
myid-bot/
├─ src/
│  └─ index.ts       # Main bot code
├─ .env              # Environment variables (ignored by Git)
├─ package.json
├─ tsconfig.json
└─ README.md
```

## Notes

* Make sure `.env` is **not pushed to GitHub** to keep your token safe.
* TypeScript provides type checking to avoid runtime errors.
* You can extend the bot with more commands by editing `src/index.ts`.

## License

MIT

```
