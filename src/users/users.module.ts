import { Module } from '@nestjs/common';

// dependencies
import { MongoloquentModule } from '@mongoloquent/nestjs';

// models
import { User } from './users.model';

// controllers
import { UsersController } from './users.controller';

// services
import { UsersService } from './users.service';

@Module({
  imports: [MongoloquentModule.forFeature([User])],
  exports: [MongoloquentModule],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
