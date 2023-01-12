//A function that returns a license badge and url, based on which license is passed in
function renderLicenseBadge(license) {
	let licenseArray = [
		{name: "apache", longname: 'Apache License 2.0', badge: '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]', url: 'https://opensource.org/licenses/Apache-2.0'}, 
		{name: "gpl30", longname: 'GNU General Public License v3.0', badge: '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]', url: 'https://www.gnu.org/licenses/gpl-3.0'},
		{name: "mit", longname: 'MIT License', badge: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]', url: 'https://opensource.org/licenses/MIT'},
		{name: "bsd3", longname: 'BSD 3-Clause "New" or "Revised" License', badge: '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)]', url: 'https://opensource.org/licenses/BSD-3-Clause'},
		{name: "bsd2", longname: 'BSD 2-Clause "Simplified" License', badge: '[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)]', url: 'https://opensource.org/licenses/BSD-2-Clause'},
		{name: "boost", longname: 'Boost Software License 1.0', badge: '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)]', url: 'https://www.boost.org/LICENSE_1_0.txt'},
		{name: "cc",  longname: 'Creative Commons Zero v1.0 Universal', badge: '[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)]', url: 'http://creativecommons.org/publicdomain/zero/1.0/'},
		{name: "epl20", longname: 'Eclipse Public License 2.0', badge: '[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)]', url: 'https://opensource.org/licenses/EPL-1.0'},
		{name: "agpl30", longname: 'GNU Affero General Public License v3.0', badge: '[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)]', url: 'https://www.gnu.org/licenses/agpl-3.0'},
		{name: "gpl20", longname: 'GNU General Public License v2.0', badge: '[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)]', url: 'https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html'},
		{name: "gpl21", longname: 'GNU Lesser General Public License v2.1', badge: '[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)]', url: 'https://www.gnu.org/licenses/lgpl-3.0'},
		{name: "moz", longname: 'Mozilla Public License 2.0', badge: '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)]', url: 'https://opensource.org/licenses/MPL-2.0'},
		{name: "unlic", longname: 'The Unlicense', badge: '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)]', url: 'http://unlicense.org/'}
	];

	for (const item of licenseArray) {
		if (license == item.name) {
			let badge = `${item.badge}(${item.url})`;
			let licLink = item.url;
			let longname = item.longname;
			// console.log(badge, licLink)
			return [badge, licLink, longname]
		}
	}
};

//A function to generate markdown for README
function generateMarkdown(data) {
	let license = data.license.toString();

	// If there is no license, return an empty string
	if (license) {
		license = renderLicenseBadge(license);
	} else license = 'none';

	// Load the different sections into variables.   
	// Generate a TOC
	const title = `# ${data.name}`;
	const description = `${license[0]}     
${data.description}`;
	const toc = `
Table of Contents
=================
* [Installation Instructions](#installation-instructions)
* [Usage Instructions](#usage)
* [Contribution Guidelines](#contribution-guidelines)
* [Testing Instructions](#testing-instructions)
* [License Inforamtion](#license-inforamtion)
* [Questions](#questions)`
	const install = `## Installation Instructions\n	${data.install}`;
	const usage = `## Usage
	${data.usage}`;
	const contrib = `## Contribution Guidelines
	${data.contrib}`;
	const test = `## Testing instructions
	${data.test}`;
	const lic = `## License Inforamtion
This project is covered under the ${license[2]}\n
	${license[1]}`;
	const questions = `## Questions
[Github](https://github.com/${data.github}/)
	Email: ${data.email}`;

	// load all of the sections into one variable to pass back
	const readme = `${title}
${description}
${toc}
${install}
${usage}
${contrib}
${test}
${lic}
${questions}`

return(readme);
}

module.exports = generateMarkdown;
