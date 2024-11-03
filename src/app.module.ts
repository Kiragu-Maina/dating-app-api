import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { DatingAppModule } from './dating-app/dating-app.module';

@Module({
  imports: [PrismaModule, DatingAppModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
