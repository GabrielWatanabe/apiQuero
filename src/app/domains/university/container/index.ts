import { container } from 'tsyringe';
import UniversityRepository from '../infra/knex/repositories/UniversityRepository';
import IUniversityRepository from '../repositories/IUniversityRepository';

container.registerSingleton<IUniversityRepository>(
  'UniversityRepository',
  UniversityRepository,
);
