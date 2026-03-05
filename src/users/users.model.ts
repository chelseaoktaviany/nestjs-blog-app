import {
  Model,
  IMongoloquentSchema,
  IMongoloquentTimestamps,
} from 'mongoloquent';

export enum UserRole {
  User = 'user',
  Admin = 'admin',
}

export interface IUser extends IMongoloquentSchema, IMongoloquentTimestamps {
  username: string;
  email: string;
  role: UserRole;
}

export class User extends Model<IUser> {
  public static $schema: IUser;
  protected $collection: string = 'users';
}
