const inquirer = require("inquirer");
const fs = require("fs");
const generate = require("./utils/generateMarkdown.js");

//Array of questions for user input
const questions = [
    	{type: 'input',
		message: 'What is the name of your project?',
		name: 'name'
		},
		{type: 'input',
		message: 'Enter a description for your project:',
		name: 'description'
		},
		{type: 'input',
		message: 'Enter your install instructions:',
		name: 'install'
		},
		{type: 'input',
		message: 'Enter usage information:',
		name: 'usage'
		},
		{type: 'input',
		message: 'Enter contribution guidelines',
		name: 'contrib'
		},
		{type: 'input',
		message: 'Enter test instructions:',
		name: 'test'
		},
		{type: 'checkbox',
		message: 'Choose a license:',
		name: 'license',
		choices: [
			{name: 'None'},
			{name: 'Apache License 2.0'},
			{name: 'GNU General Public License v3.0'},
			{name: 'MIT License'},
			{name: 'BSD 2-Clause "Simplified" License'},
			{name: 'BSD 3-Clause "New" or "Revised" License'},
			{name: 'Boost Software License 1.0'},
			{name: 'Creative Commons Zero v1.0 Universal'},
			{name: 'Eclipse Public License 2.0'},
			{name: 'GNU Affero General Public License v3.0'},
			{name: 'GNU General Public License v2.0'},
			{name: 'GNU Lesser General Public License v2.1'},
			{name: 'Mozilla Public License 2.0'},
			{name: 'The Unlicense'}
		]
		},
		{type: 'input',
		message: 'What is your github username?',
		name: 'github'
		},
		{type: 'input',
		message: 'What is your email address?',
		name: 'email'
		}
];


// TODO: Create a function to write README file
function writeToFile(answers) {
	console.log(answers);
	fs.writeFile(`./README.md`, `${answers.email}`, (err) =>
	err ? console.error(err) : console.log('README.md created!')
	);
}

// TODO: Create a function to initialize app
function init() {
	inquirer.prompt(questions).then((answers) => {
		writeToFile(answers);
	});
};

// Function call to initialize app
init();
