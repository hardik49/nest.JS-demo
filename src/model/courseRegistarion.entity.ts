import {
  PrimaryGeneratedColumn,
  Column,
  Entity,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { UserEntity } from 'src/model/user.entity';
import { CourseEntity } from 'src/model/course.entity';

@Entity('courseRegistration')
export class CourseRegistrationEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  courseId: string;

  @Column()
  userId: string;

  @OneToOne(() => UserEntity)
  @JoinColumn()
  user: UserEntity;

  @OneToOne(() => CourseEntity)
  @JoinColumn()
  course: CourseEntity;
}
