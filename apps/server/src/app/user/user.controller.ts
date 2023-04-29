import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UserService } from './user.service';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get(':id')
  findById(@Param('id') id:string){
    return this.userService.findById(id)
  }
  
  @Get()
  findMany(){
    return this.userService.findMany()
  }
  
  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Patch(':id')
  update(@Param('id') id:string,@Body() body:UpdateUserDto){
    return this.userService.update(id, UpdateUserDto)
  }

  @Delete(':id')
  delete(@Param('id') id:string){
    return this.userService.delete(id)
  }
}
