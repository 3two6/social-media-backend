import { Module } from '@nestjs/common';
import { PostController } from './modules/post/post.controller';
import { PostService } from './modules/post/post.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostModule } from './modules/post/post.module';
import { Post } from './modules/post/entities/post.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'root',
      database: 'postgres',
      entities: [Post],
      synchronize: true,
      logging: true
    }),
    PostModule
  ]
})
export class AppModule { }
