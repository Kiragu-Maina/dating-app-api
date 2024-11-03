import { Module } from '@nestjs/common';
import { DatingAppService } from './dating-app.service';
import { DatingAppController } from './dating-app.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [DatingAppController],
  providers: [DatingAppService],
})
export class DatingAppModule {}
