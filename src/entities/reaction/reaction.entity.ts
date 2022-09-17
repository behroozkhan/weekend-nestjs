import { Post } from 'entities/post/post.entity';
import { User } from 'entities/user/user.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity()
export class Reaction {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  type: number;

  @ManyToOne(() => User, (user) => user.reactions)
  user: User;

  @ManyToOne(() => Post, (post) => post.reactions)
  post: Post;
}
