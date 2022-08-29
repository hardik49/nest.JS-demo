import { CourseEntity } from './course.entity';
import {
  PrimaryGeneratedColumn,
  Column,
  Entity,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { SubjectEntity } from 'src/model/subject.entity';

@Entity('courseSubjectRegistration')
export class CourseSubjectRegistrationEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  courseId: string;

  @Column()
  subjectId: string;

  @OneToOne(() => SubjectEntity)
  @JoinColumn()
  subject: SubjectEntity;

  @OneToOne(() => CourseEntity)
  @JoinColumn()
  course: CourseEntity;
}
