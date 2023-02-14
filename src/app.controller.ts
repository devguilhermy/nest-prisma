import {
	Body,
	Controller,
	Get,
	Post
	} from '@nestjs/common';
import { CreateNotificationBody } from './create-notification';
import { Prisma } from '@prisma/client';
import { PrismaService } from './prisma.service';

@Controller('notifications')
export class AppController {
  constructor(private readonly prisma: PrismaService) {}

  @Get()
  list() {
    return this.prisma.notification.findMany();
  }

  @Post()
  create(@Body() body: CreateNotificationBody) {
    return this.prisma.notification.create({
      data: {
        ...body,
      },
    });
  }
}
