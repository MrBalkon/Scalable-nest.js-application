import { DocumentBuilder } from '@nestjs/swagger';

const SwaggerConfig = new DocumentBuilder()
.setTitle(`${process.env.PROJECT_NAME} API`)
.setDescription(`The ${process.env.PROJECT_NAME} ptoject API`)
.setVersion('1.0')
.build();

export { SwaggerConfig };