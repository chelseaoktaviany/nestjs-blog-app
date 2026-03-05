import {
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  Req,
  Res,
  Body,
} from '@nestjs/common';
import { Request, Response } from 'express';

// service
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  // membuat sebuah pengguna
  @Post()
  @HttpCode(HttpStatus.CREATED)
  async createUser() {
    return { message: 'User berhasil dibuat' };
  }
}
