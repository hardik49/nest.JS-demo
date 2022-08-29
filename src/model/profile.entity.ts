import {
  PrimaryGeneratedColumn,
  Column,
  Entity,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { UserEntity } from 'src/model/user.entity';

@Entity('profile')
export class ProfileEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  fullName: string;

  @Column({ enum: ['male', 'female', 'other'] })
  gender: string;

  @Column()
  userId: number;

  @OneToOne(() => UserEntity)
  @JoinColumn()
  user: UserEntity;
}
