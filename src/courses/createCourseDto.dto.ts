import { IsEmail, IsNotEmpty, Length } from 'class-validator';

export class CreateCourseDto {
  readonly id: number;

  @IsEmail()
  @Length(10, 25)
  readonly email: string;

  @IsNotEmpty()
  @Length(5, 30)
  readonly name: string;

  @IsNotEmpty()
  @Length(5, 255)
  readonly desc: string;
}
