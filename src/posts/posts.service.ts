import { Injectable } from '@nestjs/common';
import { InjectModel } from '@mongoloquent/nestjs';

import { Post } from './posts.model';

import { ObjectId } from 'mongodb';

interface IPostCreate {
  title: string;
  description: string;
}

@Injectable()
export class PostsService {
  constructor(@InjectModel(Post) private postModel: typeof Post) {}

  // menampilkan semua post
  async findAll() {
    const posts = await this.postModel.get();

    return posts;
  }

  // menampilkan detail post
  async findOne(id: ObjectId) {
    const post = await this.postModel.where('_id', id).first();

    return post;
  }

  // membuat sebuah post
  async createOne(body: IPostCreate) {
    const post = await this.postModel.create(body);

    return post;
  }

  // async updateOne() {}

  async remove(id: ObjectId) {
    const post = await this.postModel.find(id);
    await post.delete();
  }
}
