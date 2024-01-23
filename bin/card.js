#!/usr/bin/env node
// 👆 Used to tell Node.js that this is a CLI tool

// Pull in our modules
import boxen from "boxen";
import chalkTemplate from "chalk-template";

import chalk from "chalk";

// Define options for Boxen
const options = {
  padding: 1,
  margin: 1,
  borderStyle: "double",
};

const teal = `hex("#7FFFD4")`;
const snow = `hex("#FBFBFB")`;

// You can also use tagged template literals with Chalk!
const cardText = chalkTemplate`{${teal} 🤠 Connor Minielly}

     {${snow} Work:} {${snow} Full Stack Software Developer}
      {${snow} NPM:} {${teal} https://www.npmjs.com/~connorminielly}
   {${snow} Github:} {${teal} https://github.com/ConnorMinielly}
 {${snow} LinkedIn:} {${teal} https://www.linkedin.com/in/connor-minielly/}
      {${snow} Web:} {${teal} https://connor-minielly.com}

     {${snow} Card:} {hex("#54428E") npx connorm}`;

console.log(chalk.hex("#54428E")(boxen(cardText, options)));
