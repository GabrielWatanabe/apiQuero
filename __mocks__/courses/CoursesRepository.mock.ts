import ICoursesRepository from '../../src/app/domains/courses/repositories/ICoursesRepository';
import { Courses } from '../../src/app/domains/courses/infra/knex/entities/Courses';

export const mockedCoursesRepository = ({
  save: ({ name }: { name: string }): Promise<Courses> =>
    Promise.resolve(
      Object.assign(new Courses(), {
        id: 1,
        name,
        deleted: false,
        created_at: new Date(),
      }),
    ),

  getById: ({ id }: { id: number }): Promise<Courses> =>
    Promise.resolve(
      Object.assign(new Courses(), {
        id,
      }),
    ),

  getAll: (): Promise<Courses> => Promise.resolve(new Courses()),
} as unknown) as Partial<ICoursesRepository>;
