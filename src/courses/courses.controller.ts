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

  @Get('/register-subject')
  async registerCourses() {
    const courses = await this.coursesService.getRegisteredCourses();
    const groupedCourses = courses.reduce((acc, curr) => {
      const course = (acc || []).find((ele) => ele.courseId === curr.courseId);
      if (course) {
        course.subjects.push(curr.subject);
      } else {
        acc = [
          ...acc,
          {
            courseId: curr.courseId,
            subjectId: curr.subjectId,
            course: curr.course,
            subjects: [curr.subject],
            id: curr.id,
          },
        ];
      }
      return acc;
    }, []);
    return groupedCourses;
  }

  @Get('/register-user')
  async registerUserCourses() {
    const courses = await this.coursesService.getRegisteredCoursesWithUsers();
    const groupedCourses = courses.reduce((acc, curr) => {
      const course = (acc || []).find((ele) => ele.courseId === curr.courseId);
      const { id, ...rest } = curr.user;
      if (course) {
        course.users.push(rest);
      } else {
        acc = [
          ...acc,
          {
            courseId: curr.courseId,
            userId: curr.userId,
            course: curr.course,
            users: [rest],
            // id: curr.id,
          },
        ];
      }
      return acc;
    }, []);
    return groupedCourses;
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

  @Post('/register-subject')
  async registerCourse(@Body() addData) {
    return await this.coursesService.registerCourse(addData);
  }

  @Post('/register-user')
  async registerUser(@Body() addData) {
    return await this.coursesService.registerCourseUser(addData);
  }

  @Delete()
  async deleteCourse(@Query() deleteCourseId) {
    return await this.coursesService.deleteCourse(
      Number(deleteCourseId.courseId),
    );
  }

  @Put(':courseId')
  async updateCourse(@Param('courseId') updateId, @Body() updateData) {
    return await this.coursesService.updateCourse(updateId, updateData);
  }
}
