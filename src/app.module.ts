import { Module } from '@nestjs/common';
import { PostController } from './modules/post/post.controller';
import { PostService } from './modules/post/post.service';

@Module({
  imports: [],
  controllers: [PostController],
  providers: [PostService],
})
export class AppModule { }
