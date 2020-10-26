import escape from 'pg-escape';
import { connection } from '../../../../../shared/infra/knex/index';
import ICoursesRepository from '../../../repositories/ICoursesRepository';
import { Courses } from '../entities/Courses';

import { insert, select, selectById } from '../queries/queries';

class CoursesRepository implements ICoursesRepository {
  public async save(name: string): Promise<Courses> {
    const query = escape(insert, [name]);
    const result = await connection.raw(query);
    return result;
  }

  public async getAll(): Promise<Courses> {
    const query = escape(select);
    const result = await connection.raw(query);
    return result;
  }

  public async getById(id: number): Promise<Courses> {
    const query = escape(selectById, [id]);
    const result = await connection.raw(query);
    return result;
  }
}

export default CoursesRepository;
