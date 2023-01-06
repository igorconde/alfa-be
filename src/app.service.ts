import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): any {
    const employees = [
      {
        name: 'John Smith',
        position: 'Manager',
        salary: 50000,
      },
      {
        name: 'Jane Doe',
        position: 'Salesperson',
        salary: 40000,
      },
      {
        name: 'Bob Johnson',
        position: 'Engineer',
        salary: 60000,
      },
    ];
    return employees;
  }
}
