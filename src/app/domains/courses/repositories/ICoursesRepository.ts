import { Courses } from '../infra/knex/entities/Courses';

export default interface ICoursesRepository {
  save(name: string): Promise<Courses | undefined>;

  getAll(): Promise<Courses | undefined>;

  getById(id: number): Promise<Courses | null>;
}
