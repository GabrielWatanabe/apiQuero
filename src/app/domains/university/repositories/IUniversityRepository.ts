import { University } from '../infra/knex/entities/University';

export default interface IUniversityRepository {
  save(name: string): Promise<University | undefined>;

  getAll(): Promise<University | undefined>;

  getById(id: number): Promise<University | null>;
}
