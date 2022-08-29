import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CoursesController } from './courses.controller';
import { CourseEntity } from 'src/model/course.entity';
import { CourseSubjectRegistrationEntity } from 'src/model/courseSubjectRegistration';
@Module({
  imports: [
    TypeOrmModule.forFeature([CourseEntity, CourseSubjectRegistrationEntity]),
  ],
  controllers: [CoursesController],
  providers: [CoursesService],
})
export class CoursesModule {}
