import { Module } from '@nestjs/common';
import { FilesService } from './files.sercice';

@Module({
  providers: [FilesService],
  exports: [FilesService]
})
export class FilesModule {}