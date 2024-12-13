import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Expense } from './entities/expenses.entity';

@Injectable()
export class ExpensesService {
  constructor(
    @InjectRepository(Expense)
    private readonly expenseRepository: Repository<Expense>,
  ) {}

  async create(createExpenseDto, userId: number): Promise<Expense> {
    const expense = this.expenseRepository.create({
      user: { id: userId, ...createExpenseDto }, // 관계 객체를 설정
    });
    return this.expenseRepository.save(expense);
  }

  async findByUser(userId: number): Promise<Expense[]> {
    return this.expenseRepository.find({
      where: { user: { id: userId } },
      relations: ['user'], // 관계 데이터를 명시적으로 로드
    });
  }
}
