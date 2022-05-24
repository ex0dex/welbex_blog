import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import { PostsModule } from './posts/posts.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({
    isGlobal:true
  }),
    DatabaseModule,
    UsersModule,
    PostsModule,
    AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
