import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersModule } from 'src/users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule, } from '@nestjs/passport';
import { JwtStrategy } from './strategies/jwt.startegy';

@Module({
  imports:[
    UsersModule, 
    PassportModule,
    JwtModule.register({
      secret: process.env.PRIVATE_KEY,
      signOptions: { expiresIn: '30d' },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy ],
  exports:[AuthService]
})
export class AuthModule {}
