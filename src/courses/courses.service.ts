import { Injectable } from '@nestjs/common';
import { COURSES } from './course.mock';

@Injectable()
export class CoursesService {
  courses = COURSES;

  getCourses(): Promise<any> {
    return new Promise((resolve) => {
      resolve(this.courses);
    });
  }

  getCoursesById(id): Promise<any> {
    return new Promise((resolve) => {
      const result = this.courses.find((e) => e.id === Number(id));
      resolve(result);
    });
  }

  addNewCourse(course): Promise<any> {
    return new Promise((resolve) => {
      this.courses.push(course);
      resolve(this.courses);
    });
  }

  deleteCourse(courseId): Promise<any> {
    return new Promise((resolve) => {
      const index = this.courses.findIndex(
        (e) => e.id === Number(courseId.deleteCourseId),
      );
      if (index === -1) {
        throw new Error('Course does not exists');
      }
      this.courses.splice(index, 1);

      resolve(this.courses);
    });
  }

  updateCourse(updateId, data): Promise<any> {
    return new Promise((resolve) => {
      const selectCourseId = this.courses.findIndex(
        (e) => e.id === Number(updateId),
      );

      if (selectCourseId === -1) {
        throw new Error('Course not found');
      }
      this.courses[selectCourseId] = { ...data };
      resolve(this.courses);
    });
  }
}
