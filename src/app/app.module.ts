import { Module } from '@nestjs/common';
import { AppService } from '@/app/app.service';
import { AppController } from '@/app/app.controller';
import { ConfigModule } from '@nestjs/config';
import { HttpModule } from '@nestjs/axios';
import { PlantsModule } from '@/modules/plants/plants.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env'
    }),
    HttpModule,
    PlantsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}
