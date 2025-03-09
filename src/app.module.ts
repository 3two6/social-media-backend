import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { PostModule } from './modules/post/post.module';
import { Post } from './modules/post/entities/post.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // Loads .env file globally
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [Post],
      synchronize: process.env.DB_SYNCHRONIZE === 'true',
      logging: process.env.DB_LOGGING === 'true',
    }),
    PostModule
  ]
})
export class AppModule { }
