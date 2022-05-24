import { Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsController } from './posts.controller';
import { postsProviders } from './posts.providers';
import { DatabaseModule } from 'src/database/database.module';
import { FilesModule } from 'src/files/files.module';

@Module({
  imports:[DatabaseModule, FilesModule],
  controllers: [PostsController],
  providers: [PostsService, ...postsProviders]
})
export class PostsModule {} 
