import { registerAs } from '@nestjs/config';

export interface RmqConfig {
   url: string
   queue: string,
   port: number,
}

export const rmqConfig = registerAs(
  'rmq',
  (): RmqConfig => ({
    url: process.env.RMQ_URL,
    port: parseInt(process.env.RMQ_PORT),
    queue: process.env.RMQ_QUEUE
  }),
);
