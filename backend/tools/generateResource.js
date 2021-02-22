/* eslint-disable @typescript-eslint/no-var-requires */
const execSync = require('child_process').execSync;
const fs = require('fs');
const path = require('path');
const chalk = require('chalk')
const cfont = require('cfonts')

createResource();

function createResource(){
    const arguments =  process.argv;
    const arg = arguments[2];

    if(!arg){
        console.log(chalk.red('[ERROR]') + ` YOU MUST PROVIDE SERVICE NAME`)
        return;
    }
    // Creating files by templates
    const entityOutput = execSync(`node ./tools/commandLine.js create-entity-action __entity__=${arg}`, (err, stdout, stderr) => {
        console.log(stdout);
    })
    console.log(entityOutput.toString())
    const moduleOutput = execSync(`node ./tools/commandLine.js create-module-action __module__=${arg} __service__=${arg} __controller__=${arg}`)
    console.log(moduleOutput.toString())

    const { toPascalCase, toDotCase, toKebabCase } = require('./libs/cases.js')

    const main_module_path = path.join(__dirname, '../src/app.module.ts');
    const appModule = fs.readFileSync(main_module_path, 'utf-8');

    let string_with_import = `import { ${toPascalCase(arg)}Module } from '@application/http/${toKebabCase(arg)}/${toDotCase(arg)}.module'\n${appModule}`;

    const imports_key_word = 'imports:'
    const imports_index = string_with_import.indexOf(imports_key_word) + imports_key_word.length
    const string_before_imports = string_with_import.slice(0, imports_index)
    const string_after_imports = string_with_import.slice(imports_index)

    const index_of_starting_array = string_after_imports.indexOf('[') + 1;
    const string_after_imports_1 = string_after_imports.slice(0, index_of_starting_array)
    const string_after_imports_2 = string_after_imports.slice(index_of_starting_array)
    const added_module = `${toPascalCase(arg)}Module, `

    const result = string_before_imports + string_after_imports_1 + added_module + string_after_imports_2;
    fs.writeFileSync(main_module_path, result)
    console.log(chalk.blue(`MODIFIED:`) + chalk.white(` ${main_module_path}`))
}