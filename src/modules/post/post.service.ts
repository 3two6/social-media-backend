import { Injectable } from '@nestjs/common';

@Injectable()
export class PostService {
  getPostAll(): string {
    return 'All the post have been returned';
  }

  getPostById(id: string): string {
    return `${id} post has been returned`;
  }

  getCommentsByPostId(id: string): string {
    return `${id} post comments returned`
  }
}
