const inquirer = require("inquirer");
const fs = require("fs");

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
		{type: 'input',
		message: 'Choose a license:',
		name: 'license'
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
function writeToFile(fileName, answers) {
	console.log(fileName, answers);
	fs.writeFile(`./${fileName}`, `${answers.email}`, (err) =>
	err ? console.error(err) : console.log('README.md created!')
	);
}

// TODO: Create a function to initialize app
function init() {
	inquirer.prompt(questions).then((answers) => {
		writeToFile("README.md", answers);
	});
};

// Function call to initialize app
init();
