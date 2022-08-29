import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CourseEntity } from 'src/model/course.entity';
import { CourseSubjectRegistrationEntity } from 'src/model/courseSubjectRegistration';
import { CreateCourseDto } from './createCourseDto.dto';
@Injectable()
export class CoursesService {
  constructor(
    @InjectRepository(CourseEntity)
    private courseRepository: Repository<CourseEntity>,
    @InjectRepository(CourseSubjectRegistrationEntity)
    private courseSubjectRepository: Repository<CourseSubjectRegistrationEntity>,
  ) {}

  getCourses(): Promise<any> {
    return new Promise((resolve) => {
      resolve(this.courseRepository.find({}));
    });
  }

  getCoursesById(id): Promise<any> {
    return new Promise((resolve) => {
      resolve(this.courseRepository.findOne(id));
    });
  }

  getRegisteredCourses(): Promise<any> {
    return new Promise((resolve) => {
      resolve(
        this.courseSubjectRepository.find({
          relations: ['course', 'subject'],
        }),
      );
    });
  }

  addNewCourse(course: CreateCourseDto): Promise<any> {
    return new Promise((resolve) => {
      const courseInst: any = new CourseEntity();
      courseInst.name = course.name;
      courseInst.email = course.email;
      courseInst.desc = course.desc;
      const createdCourse = this.courseRepository.create(courseInst);
      resolve(this.courseRepository.save(createdCourse));
    });
  }

  registerCourse(course): Promise<any> {
    return new Promise((resolve) => {
      const courseRegister: any = new CourseSubjectRegistrationEntity();
      courseRegister.courseId = course.courseId;
      courseRegister.subjectId = course.subjectId;
      const createRegisterSubject =
        this.courseSubjectRepository.create(courseRegister);
      console.log(
        '🚀 ~ file: courses.service.ts ~ line 48 ~ CoursesService ~ returnnewPromise ~ createRegisterSubject',
        createRegisterSubject,
      );
      resolve(this.courseSubjectRepository.save(createRegisterSubject));
    });
  }

  deleteCourse(courseId): Promise<any> {
    return new Promise((resolve) => {
      resolve(this.courseRepository.delete({ id: courseId }));
    });
  }

  updateCourse(updateId, data): Promise<any> {
    return new Promise((resolve) => {
      this.courseRepository.update(updateId, data);
      resolve(this.courseRepository.findOne(updateId));
    });
  }
}
