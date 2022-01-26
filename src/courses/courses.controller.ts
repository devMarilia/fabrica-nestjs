import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  Res,
} from '@nestjs/common';

@Controller('courses')
export class CoursesController {
  @Get()
  findAll(@Res() resposnse) {
    return resposnse.status(200).send('Listagem de cursos');
  }
  //Listagem dinâmica
  @Get(':id')
  findOne(@Param('id') id: string) {
    return `Curso ${id}`;
  }

  @Post()
  @HttpCode(HttpStatus.NO_CONTENT)
  create(@Body('name') body) {
    return body;
  }

  @Patch(':id')
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  update(@Param('id') id: string, @Body() body) {
    return `Atualização do curso ${id}`;
  }

  // eslint-disable-next-line @typescript-eslint/adjacent-overload-signatures
  @Delete(':id')
  remove(@Param('id') id: string) {
    return `Exclusão do curso ${id}`;
  }
}
