import { IsNumberString } from 'class-validator';

export class CreateCardDto {

    @IsNumberString()
    temperature: number

    @IsNumberString()
    windSpeed: number

    @IsNumberString()
    imageUrl: string
}