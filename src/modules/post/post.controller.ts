import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { PostService } from './post.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { ApiTags } from '@nestjs/swagger';
import {
  ApiDeleteOperation,
  ApiGetOperation,
  ApiPostOperation,
  ApiPutPatchOperation,
} from 'src/utils/swagger.decorators';

@ApiTags('Posts')
@Controller('posts')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Get()
  @ApiGetOperation('Get all posts')
  getAllPosts() {
    return this.postService.getPostAll();
  }

  @Get(':id')
  @ApiGetOperation('Get a post by ID')
  getPostById(@Param('id') id: string) {
    return this.postService.getPostById(parseInt(id, 10));
  }

  @Post()
  @ApiPostOperation('Create a new post')
  @UsePipes(new ValidationPipe({ whitelist: true }))
  createPost(@Body() createPostDto: CreatePostDto) {
    return this.postService.createPost(createPostDto);
  }

  @Put(':id')
  @ApiPutPatchOperation('Update an existing post')
  updatePost(@Param('id') id: string, @Body() updatePostDto: UpdatePostDto) {
    return this.postService.updatePost(parseInt(id, 10), updatePostDto);
  }

  @Patch(':id')
  @ApiPutPatchOperation('Partially update a post')
  modifyPost(@Param('id') id: string, @Body() updatePostDto: UpdatePostDto) {
    return this.postService.modifyPost(parseInt(id, 10), updatePostDto);
  }

  @Delete(':id')
  @ApiDeleteOperation('Delete a post by ID')
  deletePost(@Param('id') id: string) {
    return this.postService.deletePost(parseInt(id, 10));
  }
}
