// Create a separate countries.js file and store the countries array in to this file, create a separate file web_techs.js and store the webTechs array in to this file. Access both file in main.js file

import { countries } from './countries.js';

// import using an alias
import blabla from './web_techs.js';
console.log(`${countries} uses the web_tech ${blabla}`);