import { PrimaryGeneratedColumn, Column, Entity } from 'typeorm';

@Entity('course')
export class CourseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  email: string;

  @Column()
  name: string;

  @Column()
  desc: string;
}
