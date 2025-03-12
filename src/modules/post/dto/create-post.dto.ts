import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreatePostDto {
  @ApiProperty({
    example: 'Understanding SOLID Principles',
    description: 'The title of the post',
  })
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiProperty({
    example:
      'SOLID principles consist of five design principles that help developers write maintainable code.',
    description: 'The body content of the post',
  })
  @IsString()
  @IsNotEmpty()
  body: string;
}
