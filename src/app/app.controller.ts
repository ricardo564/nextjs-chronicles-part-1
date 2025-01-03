import { Controller } from '@nestjs/common';
import { AppService } from './app.service';
import { ConfigService } from '@nestjs/config';

@Controller({
  path: '',
})

export class AppController {
  constructor(
    private readonly appService: AppService,
    private configService: ConfigService,
  ) {}

  getHello(): string {
    return this.configService.get('dbconfig.dev.type') || 'Hello World!';
  }
}