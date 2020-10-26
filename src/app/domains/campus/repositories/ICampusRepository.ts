import { Campus } from '../infra/knex/entities/Campus';

export default interface ICampusRepository {
  save(name: string): Promise<Campus | undefined>;

  getAll(): Promise<Campus | undefined>;

  getById(id: number): Promise<Campus | null>;
}
