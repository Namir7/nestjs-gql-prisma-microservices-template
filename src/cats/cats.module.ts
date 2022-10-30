import { Module } from '@nestjs/common';
import { CatsService } from './cats.service';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [CatsService],
})
export class CatsModule {}
