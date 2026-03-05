import {
  Controller,
  HttpCode,
  HttpStatus,
  Get,
  Post,
  Param,
  //   Req,
  //   Res,
  Body,
  BadRequestException,
} from '@nestjs/common';

import { PostsService } from './posts.service';

import { ObjectId } from 'mongodb';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  // membuat sebuah post
  @Post()
  @HttpCode(HttpStatus.CREATED)
  async createPost(
    @Body('title') title: string,
    @Body('description') description: string,
  ) {
    if (!title) throw new BadRequestException('title is required');
    if (!description) throw new BadRequestException('description is required');

    const newPost = await this.postsService.createOne({ title, description });

    return { message: 'Post berhasil dibuat', data: newPost };
  }

  // menampilkan semua post
  @Get()
  @HttpCode(HttpStatus.OK)
  async getAllPosts() {
    const posts = await this.postsService.findAll();

    return posts;
  }

  // menampilkan detail post
  @Get(':id')
  @HttpCode(HttpStatus.OK)
  async getPost(@Param('id') id: string) {
    // bisa diconvert dari string ke objectid secara alternatif
    const _id = new ObjectId(id);

    const post = await this.postsService.findOne(_id);

    return post;
  }
}
