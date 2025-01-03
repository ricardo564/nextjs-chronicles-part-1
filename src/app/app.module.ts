import { Module } from '@nestjs/common';
import { AppService } from '@/app/app.service';
import { AppController } from '@/app/app.controller';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env'
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
