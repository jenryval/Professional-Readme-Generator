// function to generate markdown for README
function generateMarkdown(answers) {
  
    const badge = '[![License: MIT](https://img.shields.io/badge/License-' + answers.licenses + '-yellow.svg)](https://opensource.org/licenses/MIT)';
  
  
  return `# ${answers.title}
    ${badge}

##Table of Contents
  **[instruction](#instruction)
  **[installation](#installation)
  **[usage](#usage)
  **[contribution](#contribution) 
  **[test](#test)
  **[credit](#credit)
  **[licenses](#licenses)

---

##Instruction
${answers.instruction}

---

##Description
${answers.description}

---

##Installation
${answers.installation}

---

##Usage
${answers.usage}

---

##Contribution
${answers.contribution}

---

*Test
${answers.test}

---

##Credit
${answers.credit}

---

##Licenses
${answers.licenses}${badge}

---

##Contact
*Github: https://github.com/${answers.github}
*Email: ${answers.email}
`;
}

module.exports = 
generateMarkdown;

