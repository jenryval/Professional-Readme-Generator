// function to generate markdown for README
function generateMarkdown(answers) {
  return `# ${answers.title}


*[installation] {#installation}
*[usage] {#usage}
*[contributions] {#contributions} 
*[credits] {#credits}
*[License] {#License}


* #installation
${installation}
*usage
${usage}
*contribution
${contribution}
*instructions
${instructions}
*credit
${credit}
*license
${license}


# Contact
*Github: ${git}
*Email: ${email}
`;
}

module.exports = generateMarkdown;
