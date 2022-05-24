import { Inject, Injectable } from '@nestjs/common';
import { USERS_REPOSITORY } from 'src/constants';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @Inject(USERS_REPOSITORY)
    private usersRepository: typeof User
  ){}
 async create(createUserDto: CreateUserDto) {
    return await this.usersRepository.create({...createUserDto})
  }

  findAll() {
    return this.usersRepository.findAll()
  }

  async findByEmail(email: string) {
    const user = await this.usersRepository.findOne({where: {email}, include: {all: true}})
    return user;
}

  findOneById(id: number) {
    return this.usersRepository.findOne({where:{id}})
  }

  
  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
