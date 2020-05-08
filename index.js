#!/usr/bin/env node

// import boxen 
const boxen = require('boxen');
//import chalk
const chalk = require("chalk");

const br = "\n"

const content = {

    name : chalk.bold.red("Quentin Lefèvre"),
    work : chalk("    Junior Web Developer"),
    github : "https://github.com/"+chalk.bold.grey("Qlfvr"),
    linkedin: "https://www.linkedin.com/in/"+chalk.bold.blue("Qlfvr"),
    npm: "https://www.npmjs.com/"+chalk.bold.magentaBright("~qlfvr")
};

const label ={

    work:  chalk.bold.blue("Work : "),
    github: chalk.bold.gray("  GitHub : "),
    linkedin: chalk.bold.blue("Linkedin : "),
    npm: chalk.bold.magentaBright("     npm : ")

}

console.log(boxen(
    content.name + "    "+content.work + br + br+
    label.github  +   content.github +br +
    label.linkedin + content.linkedin + br +
    label.npm + content.npm 
    , {padding: 2, borderStyle: 'round'}));
