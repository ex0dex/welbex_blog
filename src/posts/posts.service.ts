import { Inject, Injectable } from '@nestjs/common';
import { POSTS_REPOSITORY } from 'src/constants';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { Post } from './entities/post.entity';
import {FilesService} from "../files/files.service";
import {FileType} from '../files/files.service'

const file = FileType

@Injectable()
export class PostsService {
  
  constructor(@Inject(POSTS_REPOSITORY)
  private postsRepository: typeof Post,
  private fileService: FilesService
  ){}
  
  async create(createPostDto: CreatePostDto, image:any) {
    const fileName = await this.fileService.createFile(image)
    return await this.postsRepository.create({...createPostDto, image:fileName})
  } 

  findAll() {
    return this.postsRepository.findAll()
  }

  findOne(){
    return this
  }

  async update(id: number, updatePostDto: UpdatePostDto) {
    await this.postsRepository.update({
      ...updatePostDto
    }, {where:{id}})
    const updated = await this.postsRepository.findByPk(id)
    return updated
  }

  async remove(id: number) {
    await this.postsRepository.destroy({where:{id:id}})
    return `Post with ${id} has been deleted`
  }
}
