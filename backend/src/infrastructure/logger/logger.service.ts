import * as chalk from 'chalk';
import * as dayjs from 'dayjs';
import * as CFonts from 'cfonts';

export class Logger {

    public static info(message: string): void {
        console.log("[" + chalk.blue("INFO") + `][` + chalk.gray.bold(dayjs().format("HH:mm:ss")) + `]  ${message}`);
    }

    public static error(message: string): void {
        console.log("[" + chalk.red("ERROR") + `][` + chalk.gray.bold(dayjs().format("HH:mm:ss")) + `]  ${message}`);
    }

    public static application(message: string): void {
        console.log("[" + chalk.yellow("APP") + `][` + chalk.gray.bold(dayjs().format("HH:mm:ss")) + `]  ${message}`);
    }

    public static database(message: string): void {
        console.log("[" + chalk.green("DB") + `][` + chalk.gray.bold(dayjs().format("HH:mm:ss")) + `]  ${message}`);
    }

    public static request(method: string, url: string, statusCode: number, contentLength: string, userAgent: string, ip: string): void {
        const isRequestError = ![1,2,3].includes(+(`${statusCode}`[0]));
        console.log("[" + (isRequestError ? chalk.red("REQUEST ERROR") : chalk.bgWhite.black("REQUEST")) + `] ${method} ${url} ${!isRequestError ? chalk.green(statusCode) : chalk.red(statusCode)} ${contentLength} - ${userAgent} ${ip}`)
    }

    public static title(message: string): void{
        CFonts.say(message, {
            font: 'block',              // define the font face
            align: 'left',              // define text alignment
            colors: ['white', 'cyan'],         // define all colors
            background: 'transparent',  // define the background color, you can also use `backgroundColor` here as key
            letterSpacing: 3,           // define letter spacing
            lineHeight: 2,              // define the line height
            space: true,                // define if the output text should have empty lines on top and on the bottom
            maxLength: '0',             // define how many character can be on one line
            gradient: false,            // define your two gradient colors
            independentGradient: false, // define if you want to recalculate the gradient for each new line
            transitionGradient: false,  // define if this is a transition between colors directly
            env: 'node'                 // define the environment CFonts is being executed in
        });
    }

    public static subtitle(message: string): void{
        CFonts.say(message, {
            font: 'pallet',              // define the font face
            align: 'center',              // define text alignment
            colors: ['white', 'cyan'],         // define all colors
            background: 'transparent',  // define the background color, you can also use `backgroundColor` here as key
            letterSpacing: 1,           // define letter spacing
            lineHeight: 1,              // define the line height
            space: true,                // define if the output text should have empty lines on top and on the bottom
            maxLength: '0',             // define how many character can be on one line
            gradient: false,            // define your two gradient colors
            independentGradient: false, // define if you want to recalculate the gradient for each new line
            transitionGradient: false,  // define if this is a transition between colors directly
            env: 'node'                 // define the environment CFonts is being executed in
        });
    }
}
