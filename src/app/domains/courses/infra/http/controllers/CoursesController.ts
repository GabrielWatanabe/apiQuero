import { Request, Response } from 'express';
import { Controller, Post, Get } from '@overnightjs/core';
import { container } from 'tsyringe';
import CreateCoursesService from '../../../services/CreateCourseService';
import GetAllCoursesService from '../../../services/GetAllCoursesService';
import GetCoursesService from '../../../services/GetCoursesService';

@Controller('courses')
export class CoursesController {
  @Post('/')
  async store(req: Request, res: Response): Promise<Response> {
    const { name } = req.body;

    const createCoursesService = container.resolve(CreateCoursesService);
    const course = await createCoursesService.execute({ name });
    return res.json(course);
  }

  @Get('/')
  async getAll(res: Response): Promise<Response> {
    const getCoursesService = container.resolve(GetAllCoursesService);
    const courses = await getCoursesService.execute();
    return res.json(courses);
  }

  @Get('/')
  async getById(req: Request, res: Response): Promise<Response> {
    const { id } = req.body;

    const createCoursesService = container.resolve(GetCoursesService);
    const course = await createCoursesService.execute({ id });
    return res.json(course);
  }
}
