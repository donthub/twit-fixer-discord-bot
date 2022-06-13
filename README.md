# Twit Fixer Discord Bot

## Description

If **twitter.com** link is posted without other content, deletes the message and re-posts it as **vxtwitter.com** link, mentioning the original poster.

## Set-up

* Create bot with following scopes and permissions:
  * Scopes
    * `bot`
  * Permissions
    * `Read Messages/View Channels`
    * `Send Messages`
    * `Send Messages in Threads`
    * `Manage Messages`
* Generate OAuth link and add the bot to the server(s)

## Configuration

* Copy `config.sample.json` to `config.json` and provide:
  * `token`: The bot's token
  * `servers`: 
    * `id`: Server ID
    * `channels`: Channel IDs
      * `include`: List of channels to replace messages in. If empty, any non-excluded channels of the server will apply.
      * `exclude`: List of channels to not replace messages in.

## Usage

Start with `node index.js`

## Example

![Demo](twitfixerdemo.gif)