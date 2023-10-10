const TOKEN = require('./secret.json').TOKEN;
const { Telegraf } = require("telegraf");
const { message } = require('telegraf/filters');
const { QuranDB, getSurahName, getSurahNameEnglish, getSurahNameTurkish, getVerse, getVerseTranslation, Translation } = require('quran-db');
const bot = new Telegraf(process.env.BOT_TOKEN = TOKEN);

const surahData = require('./surah_data.js');
var surahNameArray = [];
var verseNumber;
let msg;

function parseSurahNamesToArray() {
    for (const i of surahData) {
        surahNameArray.push(i.turkish);
    }
    return surahNameArray;
}

function getVerseNumberFromName(surahName) {
    for (const i of surahData) {
        if (i.turkish === surahName) {
            verseNumber = i.id;
            return i.id;
        }
    }
    return "Surah not found";
}

function splitString(msg) {
    let word = msg.split(/(?<=\D)\s(?=\d)/)[0];
    word = getVerseNumberFromName(word);
    let number = Number(msg.split(/(?<=\D)\s(?=\d)/)[1]);
    return [word, number];
}

function getTranslation(data) {
    let process = [];
    process[0] = getVerse(splitString(data)[0], splitString(data)[1], false);
    process[1] = getVerseTranslation(splitString(data)[0], splitString(data)[1], false, Translation.trSaheeh);
    return process;
};


function startBot() {
    bot.start((ctx) => ctx.reply("Welcome"));
    bot.on(message('text'), (ctx) => {
        msg = ctx.message.text;
        const data = getTranslation(msg);
        ctx.reply(data[0] + "\n\n" + data[1]);
    })
    bot.launch();
}

parseSurahNamesToArray();
startBot();

process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));