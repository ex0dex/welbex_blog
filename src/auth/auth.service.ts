import { HttpException, HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { User } from 'src/users/entities/user.entity';
import * as bcrypt from 'bcrypt'

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService
  ) {}

  private async generateToken(user: User) {
    const payload = {email: user.email, sub: user.id}
    return {
        token: await this.jwtService.sign(payload)
    }
  }

  public async registration(userDto: CreateUserDto) {
    const ifUserIsExists = await this.usersService.findByEmail(userDto.email);
    if (ifUserIsExists) {
        throw new HttpException(`User with ${userDto.email} is already exists`, HttpStatus.BAD_REQUEST);
    }
    const hashPassword = await bcrypt.hash(userDto.password, 10);
    const user = await this.usersService.create({...userDto, password: hashPassword})
    return {
      user,
      token: await this.generateToken(user)
    }
  }

  async login(userDto:CreateUserDto){
    const user = await this.validateUser(userDto)
    return {
      user,
      token: await this.generateToken(user)
    }
  }

  private async validateUser(userDto: CreateUserDto) {
    const user = await this.usersService.findByEmail(userDto.email)
    const eqlPass = await bcrypt.compare(userDto.password, user.password)
    if(user && eqlPass){
      return user
    } 
    throw new UnauthorizedException({
      message: 'Incorrect email or password'
    })
  }
}