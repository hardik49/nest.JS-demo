import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SubjectEntity } from 'src/model/subject.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SubjectService {
  constructor(
    @InjectRepository(SubjectEntity)
    private subjectRepository: Repository<SubjectEntity>,
  ) {}

  getSubjects(): Promise<any> {
    return new Promise((resolve) => {
      resolve(this.subjectRepository.find({}));
    });
  }

  getSubjectById(id): Promise<any> {
    return new Promise((resolve) => {
      resolve(this.subjectRepository.findOne(id));
    });
  }

  addNewSubject(subject): Promise<any> {
    return new Promise((resolve) => {
      const subjectInst: any = new SubjectEntity();
      subjectInst.subjectName = subject.subjectName;
      subjectInst.instructor = subject.instructor;
      const createdSubject = this.subjectRepository.create(subjectInst);
      resolve(this.subjectRepository.save(createdSubject));
    });
  }
}
