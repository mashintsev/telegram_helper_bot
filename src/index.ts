import Telegraf, { Markup } from "telegraf";
// import rateLimit from "telegraf-ratelimit";
import { InlineQueryResultArticle } from "telegraf/typings/telegram-types";
import { TelegrafContext } from "telegraf/typings/context";
import { CallbackButton, UrlButton } from "telegraf/typings/markup";
import express from "express";

const { NODE_ENV } = process.env;

if (NODE_ENV !== "production") require("dotenv").config();

const { TELEGRAM_TOKEN, PORT } = process.env;

if (!TELEGRAM_TOKEN)
  throw new Error("Нужно задать переменную TELEGRAM_TOKEN");

const Bot = new Telegraf(TELEGRAM_TOKEN);

Bot.startPolling();

Bot.command("help", async (ctx) => {
    const { message } = ctx;
    return ctx.reply("Help me");
  });


Bot.command("isogd", async (ctx) => {
    const { message } = ctx;
    return ctx.reply("ISOGD");
  });
