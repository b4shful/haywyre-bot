# Haywyre Bot

The Haywyre Discord bot was ported from [EDMP Bot](https://github.com/bueosseph/edmp-bot) of which B4shful is an administrator contributor.
Credit is given to both [Kerrang](https://github.com/bueosseph) and [AdmiralBumbleBee](https://admiralbumblebee.com) for their contributions.

## Dependencies
To run the bot, some node.js modules are required.

To install these dependencies, start a terminal in the folder in which the bot is located, and run `yarn install`.

## Required Configuration

Copy `config.example.js` to `config.js` to provide most of the necessary configuration used by the bot. You'll need to update the `prefix`, `modLogChannel`, `ownerID`, and `token` values before running the bot.

The two big ones are the bot's `ownerId` and the bot's `token`. Discord provides bot-users who are invited to a server for operation. The `token` is what associates this bot to that user account.

## Making Changes to the Bot in Production

The bot is run from a repository stored on the same server which applies changes to code using githooks. If you have SSH access to the
bot user account on the server you can add it the server repo using `git remote add production botuseraccount@<server_IP>:haywyrerepopath` and push changes to the server using `git push production master`. Only changes to the master branch will be applied, do not push branches to production as they will be ignored and waste bandwidth.

## Management in Production

If you SSH into the server you'll have access to the `start`, `stop`, `checkquick`, and `checklive` scripts. Currently, when the bot is stopped or told to restart there is process used to have it start again automatically. To start you can run `./start` or `pm2 start index.js`. 
