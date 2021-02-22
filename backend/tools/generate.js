/* eslint-disable @typescript-eslint/no-var-requires */

const {items} = require('./items');
const {generateTemplateFiles} = require('generate-template-files');

generateTemplateFiles(items);