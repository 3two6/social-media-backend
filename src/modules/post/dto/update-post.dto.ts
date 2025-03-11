import { IsNotEmpty, IsString, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdatePostDto {
  @ApiProperty({ example: 'Updated Title', description: 'Updated title of the post', required: false })
  @IsString()
  @IsOptional()
  title?: string;

  @ApiProperty({ example: 'Updated content of the post.', description: 'Updated body content', required: false })
  @IsString()
  @IsOptional()
  body?: string;
}
