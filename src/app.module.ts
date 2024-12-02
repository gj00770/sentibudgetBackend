import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql', // 또는 'postgres'
      host: 'localhost',
      port: 3306, // MySQL 기본 포트
      username: 'root', // MySQL 사용자 이름
      password: 'password', // MySQL 비밀번호
      database: 'expense_manager', // 데이터베이스 이름
      entities: [__dirname + '/*/.entity{.ts,.js}'],
      synchronize: true, // 개발용으로만 true로 설정
    }),
  ],
})
export class AppModule {}
