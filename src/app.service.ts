import { Injectable } from '@nestjs/common';
import type { DB } from '@mongoloquent/nestjs';
import { InjectDB } from '@mongoloquent/nestjs';

@Injectable()
export class AppService {
  constructor(@InjectDB() private db: DB) {}

  checkAPI(): string {
    return 'Welcome to blog API';
  }
}
