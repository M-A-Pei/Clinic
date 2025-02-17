import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/lib/prisma.service';

interface IUser {
  name: string;
  email: string;
}

@Injectable()
export class UsersService {
  private users: IUser[] = []

  constructor(private prisma: PrismaService) { }

  async create(user: CreateUserDto) {
    return await this.prisma.user.create({
      data: user
    })
  }

  async findAll() {
    return await this.prisma.user.findMany();
  }

  async findOne(id: number) {
    return await this.prisma.user.findUnique({ where: { id } });
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    return await this.prisma.user.update({
      where: { id },
      data: updateUserDto
    });
  }

  async remove(id: number) {
    return await this.prisma.user.delete({
      where: { id }
    });
  }
}
