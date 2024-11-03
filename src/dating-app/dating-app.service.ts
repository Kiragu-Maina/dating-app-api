import { Injectable } from '@nestjs/common';
import { CreateDatingAppDto } from './dto/create-dating-app.dto';
import { UpdateDatingAppDto } from './dto/update-dating-app.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class DatingAppService {
  constructor(private readonly prisma: PrismaService){}
  create(createDatingAppDto: CreateDatingAppDto) {
    const { profile, ...userData } = createDatingAppDto;
    const user = this.prisma.user.create({
      data: {
        ...userData,
        profile: {
          create: profile, // Adjust as necessary to fit Prisma's input structure
        },
      },
      include: {
        profile: true, // Include the related profile data in the response
      },
    });
  
    return user;
  }

  findAll() {
    return this.prisma.user.findMany({
      include: {
        profile: true, // Include the related profile data
      },
    });
  }

  findOne(id: number) {
    return this.prisma.user.findUnique({
      where: {id},
      include: {
        profile: true, // Include the related profile data
      },
    });
  }

  update(id: number, updateDatingAppDto: UpdateDatingAppDto) {
    const { profile, ...userData } = updateDatingAppDto;
  
    const user =  this.prisma.user.update({
      where: { id },
      data: {
        ...userData,
        ...(profile && {
          profile: {
            update: profile, // Update the profile if it exists
          },
        }),
      },
      include: {
        profile: true, // Include the related profile data in the response
      },
    });
    return user;
  }

  async remove(id: number) {
    await this.prisma.profile.deleteMany ({
      where: {userId: id},
    })
    return this.prisma.user.delete({
      where: { id },
    });
  }
}
