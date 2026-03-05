import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

// dependencies
import { MongoloquentModule } from '@mongoloquent/nestjs';

// modules
import { UsersModule } from './users/users.module';

// models
import { User } from './users/users.model';

@Module({
  imports: [
    MongoloquentModule.forRoot({
      name: 'default',
      connection: 'mongodb://localhost:27017',
      database: 'blog-app-db',
      timezone: 'Asia/Jakarta',
      models: [User], // model from database
      global: true,
    }),
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
