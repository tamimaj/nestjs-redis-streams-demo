import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { RedisStreamStrategy } from '@tamimaj/nestjs-redis-streams';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, {
    strategy: new RedisStreamStrategy({
      connection: {
        url: '0.0.0.0:6379',
      },
      streams: {
        block: 5000,
        consumer: 'notification-1',
        consumerGroup: 'notification',
      },
    }),
  });

  await app.listen();
}
bootstrap();
