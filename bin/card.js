#!/usr/bin/env node
// 👆 Used to tell Node.js that this is a CLI tool

// Pull in our modules
const boxen = require('boxen');
const chalk = require('chalk');

// Define options for Boxen
const options = {
  padding: 1,
  margin: 1,
  borderStyle: 'double',
};

const teal = `hex("#7FFFD4")`;
const snow = `hex("#FBFBFB")`;

// You can also use tagged template literals with Chalk!
const cardText = chalk`
  {${teal} Connor Minielly}

     {${snow} Work:} {${snow} Full Stack Software Developer}
      {${snow} NPM:} {${teal} https://www.npmjs.com/~connorminielly}
   {${snow} Github:} {${teal} https://github.com/ConnorMinielly}
 {${snow} LinkedIn:} {${teal} https://www.linkedin.com/in/connor-minielly/}
      {${snow} Web:} {${teal} https://connor-minielly.com}

    {${snow} Card:} {hex("#54428E") npx connnor}`;

console.log(chalk.hex('#54428E')(boxen(cardText, options)));
