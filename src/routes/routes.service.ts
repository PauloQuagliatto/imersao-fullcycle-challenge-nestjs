import { Injectable } from '@nestjs/common';
import { CreateRouteDto } from './dto/create-route.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class RoutesService {
  constructor(private readonly prismaService: PrismaService) {}
  create(createRouteDto: CreateRouteDto) {
    return this.prismaService.route.create({
      data: createRouteDto,
    });
  }

  findAll() {
    return this.prismaService.route.findMany({});
  }
}
