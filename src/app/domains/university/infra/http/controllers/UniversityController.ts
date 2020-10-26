import { Request, Response } from 'express';
import { Controller, Post, Get } from '@overnightjs/core';
import { container } from 'tsyringe';
import CreateUniversityService from '../../../services/CreateUniversityService';
import GetAllUniversityService from '../../../services/GetAllUniversityService';
import GetUniversityService from '../../../services/GetUniversityService';

@Controller('university')
export class UniversityController {
  @Post('/')
  async store(req: Request, res: Response): Promise<Response> {
    const { name } = req.body;

    const createUniversityService = container.resolve(CreateUniversityService);
    const university = await createUniversityService.execute({ name });
    return res.json(university);
  }

  @Get('/')
  async getAll(res: Response): Promise<Response> {
    const getUniversityService = container.resolve(GetAllUniversityService);
    const university = await getUniversityService.execute();
    return res.json(university);
  }

  @Get('/')
  async getById(req: Request, res: Response): Promise<Response> {
    const { id } = req.body;

    const createUniversityService = container.resolve(GetUniversityService);
    const university = await createUniversityService.execute({ id });
    return res.json(university);
  }
}
