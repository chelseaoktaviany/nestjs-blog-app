import {
  Model,
  IMongoloquentSchema,
  IMongoloquentTimestamps,
} from 'mongoloquent';

export interface IPost extends IMongoloquentSchema, IMongoloquentTimestamps {
  title: string;
  description: string;
}

export class Post extends Model<IPost> {
  public static $schema: IPost;
  protected $collection: string = 'posts';
}
