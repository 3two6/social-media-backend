import { Body, Controller, Get, Param, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { PostService } from './post.service';
import { CreatePostDto } from './dto/create-post.dto';

@Controller('posts')
export class PostController {
  constructor(private readonly postService: PostService) { }

  @Get()
  getAllPosts() {
    return this.postService.getPostAll();
  }

  @Get(':id')
  getPostById(@Param('id') id: number) {
    return this.postService.getPostById(id);
  }

  @Post()
  @UsePipes(new ValidationPipe({ whitelist: true }))
  createPost(@Body() createPostDto: CreatePostDto) {
    return this.postService.createPost(createPostDto);
  }

  // @Put(':id')
  // updatePost(@Param('id') id: string): string {
  //   return 'This action updates the existing cat';
  // }

  // @Patch(':id')
  // modifyPost(@Param('id') id: string): string {
  //   return 'This action modifies the existing cat';
  // }

  // @Delete(':id')
  // deletePost(@Param('id') id: string): string {
  //   return 'This action modifies the existing cat';
  // }
}
