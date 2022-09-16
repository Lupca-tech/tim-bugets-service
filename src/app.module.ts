import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WorkspacesModule } from './workspaces/workspaces.module';
import { TaskCategoriesModule } from './task_categories/task_categories.module';

@Module({
  imports: [WorkspacesModule, TaskCategoriesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
