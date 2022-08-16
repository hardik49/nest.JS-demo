import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Delete,
  Query,
  Put,
  ValidationPipe,
  // UsePipes,
} from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CreateCourseDto } from './createCourseDto.dto';
import { Cron } from '@nestjs/schedule';

@Controller('courses')
export class CoursesController {
  constructor(private coursesService: CoursesService) {}

  @Cron('45 * * * * *')
  handleCron() {
    console.log('Cron example');
  }

  @Get()
  async getCourses() {
    return await this.coursesService.getCourses();
  }

  @Get(':courseId')
  async getCourseById(@Param('courseId') courseId) {
    return await this.coursesService.getCoursesById(courseId);
  }

  // @UsePipes(new ValidationPipe())
  @Post()
  async addNewCourse(@Body(new ValidationPipe()) addData: CreateCourseDto) {
    return await this.coursesService.addNewCourse(addData);
  }

  @Delete()
  async deleteCourse(@Query() deleteCourseId) {
    return await this.coursesService.deleteCourse(deleteCourseId);
  }

  @Put(':courseId')
  async updateCourse(@Param('courseId') updateId, @Body() updateData) {
    return await this.coursesService.updateCourse(updateId, updateData);
  }
}
