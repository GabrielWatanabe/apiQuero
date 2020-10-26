import { container } from 'tsyringe';
import CoursesRepository from '../infra/knex/repositories/CoursesRepository';
import ICoursesRepository from '../repositories/ICoursesRepository';

container.registerSingleton<ICoursesRepository>(
  'CoursesRepository',
  CoursesRepository,
);
