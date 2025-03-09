import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Post } from './entities/post.entity';
import { Repository } from 'typeorm';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(Post) private readonly postRepository: Repository<Post>,
  ) { }

  async createPost(createPostDto: CreatePostDto): Promise<Post> {
    const post = new Post();
    post.title = createPostDto.title;
    post.body = createPostDto.body;
    return await this.postRepository.save(post);
  }

  async getPostAll(): Promise<Post[]> {
    return await this.postRepository.find();
  }

  async getPostById(id: number): Promise<Post | null> {
    return await this.postRepository.findOne({ where: { id } });
  }

  async updatePost(id: number, updatePostDto: UpdatePostDto): Promise<Post> {
    const post = await this.postRepository.findOne({ where: { id } });

    if (!post) {
      throw new NotFoundException(`Post with ID ${id} not found`);
    }

    Object.assign(post, updatePostDto);
    return await this.postRepository.save(post);
  }

  async modifyPost(id: number, updatePostDto: UpdatePostDto): Promise<Post> {
    const post = await this.postRepository.findOne({ where: { id } });

    if (!post) {
      throw new NotFoundException(`Post with ID ${id} not found`);
    }

    Object.assign(post, updatePostDto);
    return await this.postRepository.save(post);
  }
}