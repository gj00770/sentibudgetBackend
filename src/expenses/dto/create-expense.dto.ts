import { IsNotEmpty, IsNumber, IsString, Min } from 'class-validator';

export class CreateExpenseDto {
  @IsString()
  @IsNotEmpty()
  description: string;

  @IsNumber()
  @Min(0)
  amount: number;
}
// DTO는 클라이언트와의 요청/응답을 정의합니다.

// src/expenses/dto/create-expense.dto.ts
// 새로운 소비 기록을 추가할 때 필요한 요청 데이터를 정의합니다.
