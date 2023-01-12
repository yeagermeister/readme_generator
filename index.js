const inquirer = require("inquirer");
const fs = require("fs");
const generate = require("./utils/generateMarkdown.js");

//Array of questions for user input
const questions = [
    	// {type: 'input',
		// message: 'What is the name of your project?',
		// name: 'name'
		// },
		// {type: 'input',
		// message: 'Enter a description for your project:',
		// name: 'description'
		// },
		// {type: 'input',
		// message: 'Enter your install instructions:',
		// name: 'install'
		// },
		// {type: 'input',
		// message: 'Enter usage information:',
		// name: 'usage'
		// },
		// {type: 'input',
		// message: 'Enter contribution guidelines',
		// name: 'contrib'
		// },
		// {type: 'input',
		// message: 'Enter test instructions:',
		// name: 'test'
		// },
		{type: 'checkbox',
		message: 'Choose a license:',
		name: 'license',
		choices: [
			{name: 'None', value: ''},
			{name: 'Apache License 2.0', value: 'apache'},
			{name: 'GNU General Public License v3.0', value: 'gpl30'},
			{name: 'MIT License', value: 'mit'},
			{name: 'BSD 2-Clause "Simplified" License', value: 'bsd2'},
			{name: 'BSD 3-Clause "New" or "Revised" License', value: 'bsd3'},
			{name: 'Boost Software License 1.0', value: 'boost'},
			{name: 'Creative Commons Zero v1.0 Universal', value: 'cc'},
			{name: 'Eclipse Public License 2.0', value: 'epl20'},
			{name: 'GNU Affero General Public License v3.0', value: 'agpl30'},
			{name: 'GNU General Public License v2.0', value: 'gpl20'},
			{name: 'GNU Lesser General Public License v2.1', value: 'gpl21'},
			{name: 'Mozilla Public License 2.0', value: 'moz'},
			{name: 'The Unlicense', value: 'unlic'}
		]
		},
		{type: 'input',
		message: 'What is your github username?',
		name: 'github'
		},
		// {type: 'input',
		// message: 'What is your email address?',
		// name: 'email'
		// }
];


// TODO: Create a function to write README file
function writeToFile(answers) {
	// fs.writeFile(`./README.md`, `${answers.email}`, (err) =>
	// err ? console.error(err) : console.log('README.md created!')
	// );
	// This is not good code to generate this page, the code to generate the page could be right here, but calling generate to adhere to the assigment.
	generate(answers);
	// fs.writeFile(`./README.md`, `${data.title}`, (err) =>
	// err ? console.error(err) : console.log('README.md created!')
	// );

}

// TODO: Create a function to initialize app
function init() {
	inquirer.prompt(questions).then((answers) => {
		writeToFile(answers);
	});
};

// Function call to initialize app
init();
