import { container } from 'tsyringe';
import CampusRepository from '../infra/knex/repositories/CampusRepository';
import ICampusRepository from '../repositories/ICampusRepository';

container.registerSingleton<ICampusRepository>(
  'CampusRepository',
  CampusRepository,
);
