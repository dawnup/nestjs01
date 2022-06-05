/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CatsService } from './cats.service';
import { CreateCatDto } from './CreateCatDto';
import { Cat } from './interface/cat.interface';



@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}
  @Get()
  findAll(): Cat[] {
    //return this.catsService.findAll();
    return this.catsService.findAll();
    
  }
  @Get(':id')
  findOne(@Param('id')id: string): string{
    return `This action returns a #${id} cats`;
  }
  @Post()
  create(@Body() createCatDto: CreateCatDto){
    //return `This action returns a new cats`;
    this.catsService.create(createCatDto);

  }
  @Put(':id')
  update(@Param('id') id: string, @Body() createCatDto: CreateCatDto) {
    return `This action updates a #${id} cats`;
  }
  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This action remove a #${id} cats`;
  }

}
