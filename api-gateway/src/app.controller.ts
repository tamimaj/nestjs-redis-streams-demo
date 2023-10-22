import { Controller, Get } from '@nestjs/common';
import { RedisStreamClient } from '@tamimaj/nestjs-redis-streams';
import { lastValueFrom } from 'rxjs';

@Controller()
export class AppController {
  constructor(private readonly redisStreamClient: RedisStreamClient) {}

  @Get('/send') // for simplicity, we are using GET here, to trigger it from browsers.
  //  you should use POST and accept real data.
  async sendMessage(): Promise<any> {
    // send a message and get a response.

    const observable = this.redisStreamClient.send('users:create', {
      data: { name: 'tamim', lastName: 'abbas', age: 24, email: 'me@tamim.es' },
      authToken: '1234',
    });

    const response = await lastValueFrom(observable); // get the last value from the observable.

    console.log('response from the stream: ', response);

    return JSON.stringify(response);
  }

  @Get('/emit')
  async emitMessage(): Promise<any> {
    // emit a message to the stream without waiting for a response.
    this.redisStreamClient.emit('users:create', {
      data: {
        name: 'emitting',
        lastName: 'user',
        age: 24,
        email: 'me@tamim.es',
      },
      authToken: '1234',
    });

    return 'OK';
  }
}
