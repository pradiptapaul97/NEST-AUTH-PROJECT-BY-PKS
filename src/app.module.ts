import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'pradipta',
      password: 'password',
      database: 'mydb',
      autoLoadEntities: true,
      synchronize: true,//for dev only not in production use migrations in production
      logging: true, // show sql queries in console
      logger: 'formatted-console',// for better formatting of sql queries
      poolSize: 5,// number of connections in the pool
      maxQueryExecutionTime: 2000, // log queries that take longer than this time(optional)
    }),
    UsersModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private dataSource: DataSource) { }
}
