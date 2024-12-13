import { Controller, Get, Post, Body, Req, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { ExpensesService } from './expenses.service';
import { CreateExpenseDto } from './dto/create-expense.dto';

@Controller('expenses')
@UseGuards(JwtAuthGuard) // JwtAuthGuard를 적용
export class ExpensesController {
  constructor(private readonly expensesService: ExpensesService) {}

  @Post()
  async create(@Body() createExpenseDto: CreateExpenseDto, @Req() req) {
    const userId = req.user.userId;
    return this.expensesService.create(createExpenseDto, userId);
  }

  @Get()
  async findByUser(@Req() req) {
    const userId = req.user.userId;
    return this.expensesService.findByUser(userId);
  }
}
