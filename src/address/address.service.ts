import { PrismaService } from 'src/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { UpdateAddressDto } from './dto/update-address.dto';

@Injectable()
export class AddressService {
  constructor(private readonly prismaService: PrismaService) {}
  create(data: any, userId: any) {
    return this.prismaService.address.create({
      data: { ...data, personId: userId },
    });
  }

  findAll(userId) {
    return this.prismaService.address.findMany({ where: { personId: userId } });
  }

  findOne(id: number) {
    return this.prismaService.address.findUnique({ where: { id } });
  }

  update(id: number, updateAddressDto: UpdateAddressDto) {
    return `This action updates a #${id} address`;
  }

  remove(id: number) {
    return `This action removes a #${id} address`;
  }
}
