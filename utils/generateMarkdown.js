//A function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
	let licenseArray = [
		{name: "apache", badge: '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]', url: 'https://opensource.org/licenses/Apache-2.0'}, 
		{name: "gpl30", badge: '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]', url: 'https://www.gnu.org/licenses/gpl-3.0'},
		{name: "mit", badge: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]', url: 'https://opensource.org/licenses/MIT'},
		{name: "bsd3", badge: '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)]', url: 'https://opensource.org/licenses/BSD-3-Clause'},
		{name: "bsd2", badge: '[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)]', url: 'https://opensource.org/licenses/BSD-2-Clause'},
		{name: "boost", badge: '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)]', url: 'https://www.boost.org/LICENSE_1_0.txt'},
		{name: "cc", badge: '[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)]', url: 'http://creativecommons.org/publicdomain/zero/1.0/'},
		{name: "epl20", badge: '[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)]', url: 'https://opensource.org/licenses/EPL-1.0'},
		{name: "agpl30", badge: '[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)]', url: 'https://www.gnu.org/licenses/agpl-3.0'},
		{name: "gpl20", badge: '[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)]', url: 'https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html'},
		{name: "gpl21", badge: '[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)]', url: 'https://www.gnu.org/licenses/lgpl-3.0'},
		{name: "moz", badge: '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)]', url: 'https://opensource.org/licenses/MPL-2.0'},
		{name: "unlic", badge: '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)]', url: 'http://unlicense.org/'}
	];

	for (const item of licenseArray) {
		if (license == item.name) {
			let badge = `${item.badge}(${item.url})`;
			let liclink = item.url;
		}
	}
};


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
	let license = data.license.toString();

	// If there is no license, return an empty string
	if (license) {
		renderLicenseBadge(license);
	} else license = 'none';


// 	const title = `# ${data.name}`;
// 	const description = `${data.description}`;
// 	const install = `## Installation Instructions\n	${data.install}`;
// 	const usage = `## Usage
// 	${data.usage}`;
// 	const contrib = `## Contribution Guidelines
// 	${data.contrib}`;
// 	const test = `## Testing instructions
// 	${data.test}`;
// 	const lic = `## License Inforamtion`;
// 	const github = `## Github Repository
// 	https://github.com/${data.github}/`;
// 	const contact = `## Contact Information
// 	${data.email}`;

// 	const readme = `${title}
// ${description}
// ${install}
// ${usage}
// ${contrib}
// ${test}
// ${lic}
// 	${license}
// ${github}
// ${contact}`

//   return `# ${data.title}

// `;
// console.log(readme);
}

module.exports = generateMarkdown;
