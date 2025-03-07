import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreatePostDto {
    @IsNumber()
    @IsNotEmpty()
    id: number;

    @IsString()
    @IsNotEmpty()
    title: string;

    @IsString()
    @IsNotEmpty()
    content: string;
}