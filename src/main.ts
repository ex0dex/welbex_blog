import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const PORT = process.env.PORT || 5000
  const config = new DocumentBuilder()
  .setTitle('blog testing')
  .setDescription('REST API Documentation')
  .setVersion('1.0')
  .addTag('ex0dex')
  .build();
const document = SwaggerModule.createDocument(app, config);
SwaggerModule.setup('api', app, document);

  await app.listen(PORT).then(()=>{
    console.log(`Server started on ${PORT}`)
  });
}
bootstrap();
