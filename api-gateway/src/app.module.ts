import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RedisStreamClientModule } from '@tamimaj/nestjs-redis-streams';

@Module({
  imports: [
    RedisStreamClientModule.register({
      connection: { url: '0.0.0.0:6379' },
      streams: { consumer: 'api-1', block: 5000, consumerGroup: 'api' },
      responseStreams: ['users:created'],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
