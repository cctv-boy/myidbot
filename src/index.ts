import TelegramBot, { Message } from "node-telegram-bot-api";
import dotenv from "dotenv";

dotenv.config();

const token: string | undefined = process.env.BOT_TOKEN;
if (!token) throw new Error("BOT_TOKEN not found in .env");

const bot: TelegramBot = new TelegramBot(token, { polling: true });
bot.on("message", (msg: Message) => {
    const chatId: number = msg.chat.id;
    const text: string | undefined = msg.text;
    if (!text) return;

    switch (text.trim()) {
        case "/start":
            bot.sendMessage(chatId, `Hello, ${msg.from?.first_name || "stranger"}`);
            break;
        case "/myid":
            bot.sendMessage(chatId, `Hello, your chatId is ${chatId}`);
            break;
            default:
            bot.sendMessage(chatId, "I only understand /start and /myid");
            
        }

})
console.log("🤖 myid-bot started...")