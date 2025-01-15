import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  create() {
    return 'This action adds a new app';
  }

  findAll() {
    return `This action returns all app`;
  }

  findOne(id: number) {
    return `This action returns a #${id} app`;
  }

  update(id: number) {
    return `This action updates a #${id} app`;
  }

  remove(id: number) {
    return `This action removes a #${id} app`;
  }
}
