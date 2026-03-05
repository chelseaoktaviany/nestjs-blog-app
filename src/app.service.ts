import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  checkAPI(): string {
    return 'Welcome to blog API';
  }
}
