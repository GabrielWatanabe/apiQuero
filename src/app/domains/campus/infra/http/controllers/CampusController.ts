import { Request, Response } from 'express';
import { Controller, Post, Get } from '@overnightjs/core';
import { container } from 'tsyringe';
import CreateCampusService from '../../../services/CreateCampusService';
import GetAllCampusService from '../../../services/GetAllCampusService';
import GetCampusService from '../../../services/GetCampusService';

@Controller('campus')
export class CampusController {
  @Post('/')
  async store(req: Request, res: Response): Promise<Response> {
    const { name } = req.body;

    const createCampusService = container.resolve(CreateCampusService);
    const campus = await createCampusService.execute({ name });
    return res.json(campus);
  }

  @Get('/')
  async getAll(res: Response): Promise<Response> {
    const getCampusService = container.resolve(GetAllCampusService);
    const campus = await getCampusService.execute();
    return res.json(campus);
  }

  @Get('/')
  async getById(req: Request, res: Response): Promise<Response> {
    const { id } = req.body;

    const createCampusService = container.resolve(GetCampusService);
    const campus = await createCampusService.execute({ id });
    return res.json(campus);
  }
}
