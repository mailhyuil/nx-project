import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UserService {
constructor(private readonly prismaService:PrismaService){}
  findById(id:string){
    return this.prismaService.user.findUnique({
      where:{id}
    })
  }
  findMany(){
    return this.prismaService.user.findMany()
  }
  create(data){
    return this.prismaService.user.create({data})
  }
  update(id:string, data){
    return this.prismaService.user.update({where:{id}, data})
  }
  delete(id:string){
    return this.prismaService.user.delete({where:{id}})
  }
}
