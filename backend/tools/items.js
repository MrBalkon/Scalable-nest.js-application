/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-var-requires */
const filename = require('file-name');
const insertLine = require('insert-line');

const config = require('../package.json');

const items = [
    {
        option: 'Create Service Action',
        defaultCase: '(pascalCase)',
        entry: {
            folderPath: './tools/templates/__service__Service.ts',
        },
        stringReplacers: ['__service__'],
        output: {
            path: './src/application/http/__service__/__service__(dotCase).service.ts',
            pathAndFileNameDefaultCase: '(dotCase)',
        },
        onComplete: (results) => {
            console.log(`results`, results);
        },
    },
    {
        option: 'Create Controller Action',
        defaultCase: '(pascalCase)',
        entry: {
            folderPath: './tools/templates/__controller__Controller.ts',
        },
        stringReplacers: ['__controller__'],
        output: {
            path: './src/application/http/__controller__/__controller__(dotCase).controller.ts',
            pathAndFileNameDefaultCase: '(dotCase)',
        },
        onComplete: (results) => {
            console.log(`results`, results);
        },
    },
    {
        option: 'Create Module Action',
        defaultCase: '(pascalCase)',
        entry: {
            folderPath: './tools/templates/__module__Module.ts',
        },
        stringReplacers: ['__module__'],
        output: {
            path: './src/application/http/__module__/__module__(dotCase).module.ts',
            pathAndFileNameDefaultCase: '(dotCase)',
        },
        onComplete: (results) => {
            console.log(`results`, results);
        },
    },
]