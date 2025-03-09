import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Post } from './entities/post.entity';
import { Repository } from 'typeorm';
import { CreatePostDto } from './dto/create-post.dto';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(Post) private readonly postRepository: Repository<Post>,
  ) { }

  async createPost(createPostDto: CreatePostDto): Promise<Post> {
    const post = new Post();
    post.title = createPostDto.title;
    post.body = createPostDto.body;
    return this.postRepository.save(post);
  }

  async getPostAll(): Promise<Post[]> {
    return this.postRepository.find();
  }

  // async getPostById(id: string): Promise<Post | null> {
  //   return this.postRepository.findOne({ where: { id } }); // Return post with the given ID
  // }

  // Get all comments related to a post
  // async getCommentsByPostId(id: string): Promise<Comment[]> {
  //   return this.commentRepository.find({ where: { postId: id } }); // Return all comments for the post
  // }
}