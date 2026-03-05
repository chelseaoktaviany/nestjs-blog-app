import {
  Controller,
  HttpCode,
  HttpStatus,
  Get,
  Param,
  // Req,
  // Res,
} from '@nestjs/common';
import { Request, Response } from 'express';

// service
import { UsersService } from './users.service';
import { ObjectId } from 'mongodb';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  // menampilkan semua users
  @Get()
  @HttpCode(HttpStatus.OK)
  async getAllUsers() {
    const users = await this.usersService.findAll();

    return users;
  }

  // menampilkan sebuah detail user
  @Get(':id')
  @HttpCode(HttpStatus.OK)
  async getUser(@Param('id') id: string) {
    const _id = new ObjectId(id);

    const user = await this.usersService.findOne(_id);

    return user;
  }
}
