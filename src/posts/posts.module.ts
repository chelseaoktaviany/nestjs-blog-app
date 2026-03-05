import { Module } from '@nestjs/common';

import { MongoloquentModule } from '@mongoloquent/nestjs';

import { Post } from './posts.model';

import { PostsController } from './posts.controller';

import { PostsService } from './posts.service';

@Module({
  imports: [MongoloquentModule.forFeature([Post])],
  exports: [MongoloquentModule],
  controllers: [PostsController],
  providers: [PostsService],
})
export class PostsModule {}
