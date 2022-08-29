import { PrimaryGeneratedColumn, Column, Entity } from 'typeorm';

@Entity('subject')
export class SubjectEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  subjectName: string;

  @Column()
  instructor: string;
}
