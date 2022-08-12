import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Delete,
  Query,
  Put,
} from '@nestjs/common';
import { CoursesService } from './courses.service';

@Controller('courses')
export class CoursesController {
  constructor(private coursesService: CoursesService) {}

  @Get()
  async getCourses() {
    return await this.coursesService.getCourses();
  }

  @Get(':courseId')
  async getCourseById(@Param('courseId') courseId) {
    return await this.coursesService.getCoursesById(courseId);
  }

  @Post()
  async addNewCourse(@Body() addData) {
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
