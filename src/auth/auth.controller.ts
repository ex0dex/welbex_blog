import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Request } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { AuthService } from './auth.service';


@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

 @Post('login')
 async login(@Body() userDto:CreateUserDto){
   return this.authService.login(userDto)
 }
 @Post('/register')
 async registration(@Body() createUserDto:CreateUserDto){
   return this.authService.registration(createUserDto)
 }
}
