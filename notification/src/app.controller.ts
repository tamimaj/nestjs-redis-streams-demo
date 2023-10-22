import { Payload } from '@nestjs/microservices';
import {
  RedisStreamHandler,
  StreamResponse,
} from '@tamimaj/nestjs-redis-streams';

export class AppController {
  @RedisStreamHandler('users:created')
  async handleSendWelcomeEmail(@Payload() data: any) {
    console.log('Handler users:created called with payload: ', data);
    // mimic sending an email.
    console.log('Sending welcome email');
    console.log('Email Sent Correctly, to user: ', data.name);

    return [] as StreamResponse; // this will ACK the stream message only without sending a response.
  }
}
