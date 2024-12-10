import { IsOptional, IsString, Matches } from 'class-validator';

export class QueryExpenseDto {
  @IsOptional()
  @IsString()
  @Matches(/^\d{4}-\d{2}$/, { message: 'month must be in YYYY-MM format' })
  month?: string;
}
