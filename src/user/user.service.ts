import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from 'src/model/user.entity';
import { ProfileEntity } from 'src/model/profile.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
    @InjectRepository(ProfileEntity)
    private profileRepository: Repository<ProfileEntity>,
  ) {}

  async getUsers(): Promise<any> {
    return await this.userRepository.find({});
  }

  async getUserById(id): Promise<any> {
    return await this.userRepository.findOne(id);
  }

  async addUser(payload): Promise<any> {
    const userRepo: any = new UserEntity();
    const profileRepo: any = new ProfileEntity();

    userRepo.email = payload.email;
    userRepo.password = payload.password;
    const createdUser = this.userRepository.create(userRepo);
    const user: any = await this.userRepository.save(createdUser);

    profileRepo.fullName = payload.fullName;
    profileRepo.gender = payload.gender;
    profileRepo.userId = user.id;
    const createdProfile = this.profileRepository.create(profileRepo);
    return await this.profileRepository.save(createdProfile);
  }
}
