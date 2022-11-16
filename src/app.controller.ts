import { Get, Controller, Render } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  @Render('index')
  root() {
    return { message: 'Hello world!', age : 20, name : 'Bálint', randomNum : Math.floor((Math.random() * 13) + 1), randomNum2 : Math.floor((Math.random() * 13) + 1) };
  }
}