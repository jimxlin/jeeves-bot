const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../.env") });

const DataConfig = {
  socket: {
    host: process.env.DATA_HOST || "127.0.0.1",
    port: process.env.DATA_PORT || "6379",
  },
  // use credentials if ACL is set up
  // username: DATA_USERNAME,
  // password: DATA_PASSWORD
};

const DiscordConfig = {
  token: process.env.DISCORD_TOKEN || "",
  clientId: process.env.DISCORD_CLIENT_ID || "",
  guildId: process.env.DISCORD_GUILD_ID || "",
};

const YahooConfig = {
  appKey: process.env.YAHOO_APP_KEY || "",
  appSecret: process.env.YAHOO_APP_SECRET || "",
};

const OpenaiConfig = {
  apiKey: process.env.OPENAI_API_KEY || "",
};

module.exports = {
  DataConfig,
  DiscordConfig,
  YahooConfig,
  OpenaiConfig,
};
