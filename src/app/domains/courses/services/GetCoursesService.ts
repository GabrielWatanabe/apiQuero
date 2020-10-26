import { injectable, inject } from 'tsyringe';
import ICoursesRepository from '../repositories/ICoursesRepository';
import { Courses } from '../infra/knex/entities/Courses';

@injectable()
class GetCoursesService {
  constructor(
    @inject('CoursesRepository')
    private coursesRepository: ICoursesRepository,
  ) {}

  public async execute({ id }: { id: number }): Promise<Courses | null> {
    const courses = await this.coursesRepository.getById(id);
    return courses;
  }
}
export default GetCoursesService;
