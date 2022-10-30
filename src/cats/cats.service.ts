import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CatsService {
  constructor(private prisma: PrismaService) {}

  sayHello() {
    console.log('meow')
  }
}
