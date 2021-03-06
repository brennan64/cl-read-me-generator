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
## Description
${description}
## Installation Tips 
${installationTips}
## Usage Info
${usageInfo}
## Questions 
Email ${collabGuide} with questions, concerns, or if you would like to collaborate!

### Table of Contents
[Description](#description)
[Installation](#Installation-Tips)
[Usage-Info](#Usage-Info)
[Collaboration](#Questions)
`;
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
      message: "Enter an email where collaborators can reach you",
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
      err ? console.log(err) : console.log("a new README is born")
    );
  });
