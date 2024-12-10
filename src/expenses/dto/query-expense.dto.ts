import { IsOptional, IsString } from 'class-validator';

export class QueryExpenseDto {
  @IsOptional()
  @IsString()
  month?: string; // 예: '2024-12'
}
