import { Injectable } from '@nestjs/common';
import { InjectModel } from '@mongoloquent/nestjs';

import { User } from './users.model';

import { ObjectId } from 'mongodb';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User) private userModel: typeof User) {}

  async findAll() {
    return this.userModel.get();
  }

  async findOne(id: ObjectId) {
    return this.userModel.where('_id', id).first();
  }

  // async updateOne() {}

  async remove(id: ObjectId) {
    const user = await this.userModel.find(id);
    await user.delete();
  }
}
