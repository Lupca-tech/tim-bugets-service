import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { WorkspacesService } from './workspaces.service';
import { CreateWorkspaceDto } from './dto/create-workspace.dto';
import { UpdateWorkspaceDto } from './dto/update-workspace.dto';

@Controller()
export class WorkspacesController {
  constructor(private readonly workspacesService: WorkspacesService) {}

  @MessagePattern('createWorkspace')
  create(@Payload() createWorkspaceDto: CreateWorkspaceDto) {
    return this.workspacesService.create(createWorkspaceDto);
  }

  @MessagePattern('findAllWorkspaces')
  findAll() {
    return this.workspacesService.findAll();
  }

  @MessagePattern('findOneWorkspace')
  findOne(@Payload() id: number) {
    return this.workspacesService.findOne(id);
  }

  @MessagePattern('updateWorkspace')
  update(@Payload() updateWorkspaceDto: UpdateWorkspaceDto) {
    return this.workspacesService.update(updateWorkspaceDto.id, updateWorkspaceDto);
  }

  @MessagePattern('removeWorkspace')
  remove(@Payload() id: number) {
    return this.workspacesService.remove(id);
  }
}
