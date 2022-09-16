import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { TaskCategoriesService } from './task_categories.service';
import { CreateTaskCategoryDto } from './dto/create-task_category.dto';
import { UpdateTaskCategoryDto } from './dto/update-task_category.dto';

@Controller()
export class TaskCategoriesController {
  constructor(private readonly taskCategoriesService: TaskCategoriesService) {}

  @MessagePattern('createTaskCategory')
  create(@Payload() createTaskCategoryDto: CreateTaskCategoryDto) {
    return this.taskCategoriesService.create(createTaskCategoryDto);
  }

  @MessagePattern('findAllTaskCategories')
  findAll() {
    return this.taskCategoriesService.findAll();
  }

  @MessagePattern('findOneTaskCategory')
  findOne(@Payload() id: number) {
    return this.taskCategoriesService.findOne(id);
  }

  @MessagePattern('updateTaskCategory')
  update(@Payload() updateTaskCategoryDto: UpdateTaskCategoryDto) {
    return this.taskCategoriesService.update(updateTaskCategoryDto.id, updateTaskCategoryDto);
  }

  @MessagePattern('removeTaskCategory')
  remove(@Payload() id: number) {
    return this.taskCategoriesService.remove(id);
  }
}
