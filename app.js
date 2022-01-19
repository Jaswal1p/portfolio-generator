const inquirer = require('inquirer');

const promptUser = () => {
  return inquirer.prompt([
     {
       type: 'input',
       name: 'name',
       message: 'What is your name?'
     },
     {
       type: 'input',
       name: 'github',
       message: 'Enter your GitHub Username'
     },
     {
       type: 'input',
       name: 'about',
       message: 'Provide some information about yourself:'
     }

   ]);
  };

   promptUser().then(answers => console.log(answers));

// const fs = require('fs');
// const generatePage = require('./src/page-template.js');

// const pageHTML = generatePage(name, github);

  

// fs.writeFile('./index.html', generatePage(name, github), err => {
//  if (err) throw err;

//  console.log('Portfolio complete! Check out index.html to see the output!');
// });


// const printProfileData = profileDataArr => {
//     for (let i = 0; i < profileDataArr.lenth; i++) {
//         console.log(profileDataArr);
//     }

//     console.log("===============");

//     // Is the same as this ...
//     profileDataArr.forEach(profileItem => console.log(profileItem))
//   };
  
//   printProfileData(profileDataArgs);