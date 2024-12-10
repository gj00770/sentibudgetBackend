import { Controller, Get, Post, Body, Query } from '@nestjs/common';
import { ExpensesService } from './expenses.service';
import { CreateExpenseDto } from './dto/create-expense.dto';
import { QueryExpenseDto } from './dto/query-expense.dto';

@Controller('expenses')
export class ExpensesController {
  constructor(private readonly expensesService: ExpensesService) {}

  @Post()
  async create(@Body() createExpenseDto: CreateExpenseDto) {
    return this.expensesService.create(createExpenseDto);
  }

  @Get()
  async findMonthly(@Query() query: QueryExpenseDto) {
    const { month } = query;
    if (!month) {
      throw new Error('Month parameter is required (e.g., 2024-12)');
    }
    return this.expensesService.findMonthlyExpenses(month);
  }
}
