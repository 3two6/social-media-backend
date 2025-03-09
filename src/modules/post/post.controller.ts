import { Body, Controller, Get, Param, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { PostService } from './post.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';

@Controller('posts')
export class PostController {
  constructor(private readonly postService: PostService) { }

  @Get()
  getAllPosts() {
    return this.postService.getPostAll();
  }

  @Get(':id')
  getPostById(@Param('id') id: string) {
    return this.postService.getPostById(Number(id));
  }

  @Post()
  @UsePipes(new ValidationPipe({ whitelist: true }))
  createPost(@Body() createPostDto: CreatePostDto) {
    return this.postService.createPost(createPostDto);
  }

  @Put(':id')
  updatePost(@Param('id') id: string, @Body() updatePostDto: UpdatePostDto) {
    return this.postService.updatePost(Number(id), updatePostDto);
  }

  // @Patch(':id')
  // modifyPost(@Param('id') id: string): string {
  //   return 'This action modifies the existing cat';
  // }

  // @Delete(':id')
  // deletePost(@Param('id') id: string): string {
  //   return 'This action modifies the existing cat';
  // }
}
