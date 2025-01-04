import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';
import { PlantsModule } from '@/modules/plants/plants.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    HttpModule,
    PlantsModule,
  ],
})

export class AppModule {}
