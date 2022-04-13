const inquirer = require("inquirer");
const fs = require("fs");

const generateRM = ({
  title,
  description,
  installationTips,
  usageInfo,
  collabGuide,
  license,
}) => ` # ${title}
${license}
${description}
${installationTips}
${usageInfo}
${collabGuide}`;
inquirer
  .prompt([
    {
      type: "input",
      name: "title",
      messasge: "What would you like the title of your README to be?",
    },
    {
      type: "input",
      name: "description",
      message: "Enter a brief description of your creation",
    },
    {
      type: "input",
      name: "installationTips",
      message: "Enter installation instructions",
    },
    {
      type: "input",
      name: "usageInfo",
      message: "Enter usage information",
    },
    {
      type: "input",
      name: "collabGuide",
      message: "Enter guide to collaborate",
    },
    {
      type: "list",
      name: "license",
      message: "choose a license",
      choices: [
        "MIT license",
        "Mozilla Public License 2.0",
        "Open Database License",
      ],
    },
  ])

  .then((answers) => {
    const pageContents = generateRM(answers);
    fs.writeFile("README.MD", pageContents, (err) =>
      err ? console.log(err) : console.log("sucess")
    );
  });
