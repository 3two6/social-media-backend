import { Body, Controller, Delete, Get, Param, Patch, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { PostService } from './post.service';
import { CreatePostDto } from './dto/create-post.dto';

@Controller('posts')
export class PostController {
  constructor(private readonly postService: PostService) { }

  @Get()
  getAllPosts(): string {
    return this.postService.getPostAll();
  }

  @Get(':id')
  getPostById(@Param('id') id: string): string {
    console.log(id);
    return this.postService.getPostById(id);
  }

  @Get(':id/comments')
  getCommentsByPostId(@Param('id') id: string): string {
    console.log(id);
    return this.postService.getCommentsByPostId(id);
  }

  @Post()
  @UsePipes(new ValidationPipe({ whitelist: true }))
  createPost(@Body() createPostDto: CreatePostDto) {
    return createPostDto;
  }

  @Put(':id')
  updatePost(@Param('id') id: string): string {
    return 'This action updates the existing cat';
  }

  @Patch(':id')
  modifyPost(@Param('id') id: string): string {
    return 'This action modifies the existing cat';
  }

  @Delete(':id')
  deletePost(@Param('id') id: string): string {
    return 'This action modifies the existing cat';
  }
}
