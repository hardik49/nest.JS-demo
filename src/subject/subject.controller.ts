import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { SubjectService } from './subject.service';

@Controller('subject')
export class SubjectController {
  constructor(private subjectService: SubjectService) {}

  @Get()
  async getCourses() {
    return await this.subjectService.getSubjects();
  }

  @Get(':subjectId')
  async getCourseById(@Param('subjectId') subjectId) {
    return await this.subjectService.getSubjectById(subjectId);
  }

  @Post()
  async addNewCourse(@Body() addData) {
    return await this.subjectService.addNewSubject(addData);
  }
}
