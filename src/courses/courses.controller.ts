import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('courses')
export class CoursesController {
  @Get('list')
  findAll() {
    return 'Listagem de cursos';
  }
  //Listagem dinâmica
  @Get(':id')
  findOne(@Param('id') id: string) {
    return `Curso ${id}`;
  }

  @Post()
  create(@Body() body) {
    return body;
  }
}
