import { UserEntity } from 'src/model/user.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProfileEntity } from 'src/model/profile.entity';

@Injectable()
export class ProfileService {
  constructor(
    @InjectRepository(ProfileEntity)
    private profileRepository: Repository<ProfileEntity>,
  ) {}
  async getProfiles(): Promise<any> {
    return await this.profileRepository.find({
      order: {
        id: 'DESC',
      },
      relations: ['user'],
    });
  }
  async getProfileByUserId(id): Promise<any> {
    return await this.profileRepository.findOne({
      where: { userId: id },
      relations: ['user'],
      //   loadRelationIds: true,
      select: ['fullName', 'gender', 'id'], // Select specific column
    });
  }
}
