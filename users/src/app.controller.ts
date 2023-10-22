import { Ctx, Payload } from '@nestjs/microservices';
import {
  RedisStreamHandler,
  StreamResponse,
  RedisStreamContext,
} from '@tamimaj/nestjs-redis-streams';

export class AppController {
  @RedisStreamHandler('users:create') // stream name.
  async handleUserCreate(@Payload() data: any, @Ctx() ctx: RedisStreamContext) {
    console.log('Handler users:create called with payload: ', data);
    console.log('Headers: ', ctx.getMessageHeaders());

    return [
      {
        payload: {
          data: { name: 'JOHN', lastName: 'SMITH', isResponse: true },
        },

        stream: 'users:created',
      },
    ] as StreamResponse;
  }
}
