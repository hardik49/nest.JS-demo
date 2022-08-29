import { Controller, Get, Param } from '@nestjs/common';
import { ProfileService } from './profile.service';

@Controller('profile')
export class ProfileController {
  constructor(private profileService: ProfileService) {}

  @Get()
  async getProfile() {
    return await this.profileService.getProfiles();
  }

  @Get(':userId')
  async getProfileById(@Param('userId') userId) {
    return await this.profileService.getProfileByUserId(userId);
  }
}
