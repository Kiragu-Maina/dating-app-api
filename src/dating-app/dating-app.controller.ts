import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DatingAppService } from './dating-app.service';
import { CreateDatingAppDto } from './dto/create-dating-app.dto';
import { UpdateDatingAppDto } from './dto/update-dating-app.dto';

@Controller('dating-app')
export class DatingAppController {
  constructor(private readonly datingAppService: DatingAppService) {}

  @Post()
  create(@Body() createDatingAppDto: CreateDatingAppDto) {
    return this.datingAppService.create(createDatingAppDto);
  }

  @Get()
  findAll() {
    return this.datingAppService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.datingAppService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDatingAppDto: UpdateDatingAppDto) {
    return this.datingAppService.update(+id, updateDatingAppDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.datingAppService.remove(+id);
  }
}
