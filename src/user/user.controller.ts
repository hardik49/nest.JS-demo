import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  async getCourses() {
    return await this.userService.getUsers();
  }

  @Get(':userId')
  async getCourseById(@Param('userId') userId) {
    return await this.userService.getUserById(userId);
  }

  @Post()
  async addNewCourse(@Body() addData) {
    return await this.userService.addUser(addData);
  }
}
