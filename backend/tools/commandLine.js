/* eslint-disable @typescript-eslint/no-var-requires */

const {generateTemplateFilesCommandLine} = require('generate-template-files');

generateTemplateFilesCommandLine([
    {
        option: 'Create Module Action',
        defaultCase: '(pascalCase)',
        entry: {
            folderPath: './tools/templates/application/http/',
        },
        stringReplacers: ['__module__', '__controller__', '__service__'],
        output: {
            path: './src/application/http/__module__(kebabCase)',
            pathAndFileNameDefaultCase: '(dotCase)',
            overwrite: true,
        },
    },
    {
        option: 'Create Entity Action',
        defaultCase: '(pascalCase)',
        entry: {
            folderPath: './tools/templates/domain/__entity__.entity.ts',
        },
        stringReplacers: ['__entity__'],
        output: {
            path: './src/domain/__entity__(kebabCase)/entities/__entity__(dotCase).entity.ts',
            pathAndFileNameDefaultCase: '(dotCase)',
            overwrite: true,
        },
    },

]);