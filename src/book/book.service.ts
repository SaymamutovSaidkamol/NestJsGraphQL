import { Injectable } from '@nestjs/common';
import { CreateBookInput } from './dto/create-book.input';
import { UpdateBookInput } from './dto/update-book.input';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class BookService {
  constructor(private prisma: PrismaService) {}

  create(data: CreateBookInput) {
    return this.prisma.book.create({
      data: { id: data.id, name: data.name, price: data.price },
    });
  }

  findAll() {
    return this.prisma.book.findMany();
  }

  findOne(id: number) {
    return this.prisma.book.findFirst({ where: { id: id } });
  }

  update(id: number, data: UpdateBookInput) {
    return this.prisma.book.update({ where: { id: id }, data });
  }

  remove(id: number) {
    return this.prisma.book.delete({ where: { id: id } });
  }
}
