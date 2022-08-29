import { UserModule } from './user/user.module';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ScheduleModule } from '@nestjs/schedule';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoursesModule } from './courses/courses.module';
import { ProfileModule } from './profile/profile.module';
import { SubjectModule } from './subject/subject.module';
@Module({
  imports: [
    CoursesModule,
    UserModule,
    ScheduleModule.forRoot(),
    TypeOrmModule.forRoot({
      name: 'default',
      type: 'postgres',
      port: 5432,
      database: 'postgres',
      // synchronize: true,
      username: 'postgres',
      password: 'postgres',
      migrationsRun: true,
      dropSchema: false,
      entities: ['dist/model/*.js'],
      migrationsTableName: 'migration',
      // entities: [
      //   path.join(__dirname, '..', 'entities', '**', '*.*'),
      //   path.join(__dirname, '..', 'entities', '*.*'),
      // ],
      migrations: ['dist/migrations/*.js'],
    }),
    ProfileModule,
    SubjectModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
