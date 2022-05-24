import { Table, Column, Model, DataType, HasMany } from 'sequelize-typescript';
import { Post } from 'src/posts/entities/post.entity';
import { UserCreationAttribute } from './user.interface';

@Table
export class User extends Model<User, UserCreationAttribute> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;


  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
  })
  email: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  password: string;

  @HasMany(() => Post)
  posts: Post[];
} 