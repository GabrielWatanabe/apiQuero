import { injectable, inject } from 'tsyringe';
import ICoursesRepository from '../repositories/ICoursesRepository';
import { Courses } from '../infra/knex/entities/Courses';

@injectable()
class GetAllCoursesService {
  constructor(
    @inject('CourseRepository')
    private coursesRepository: ICoursesRepository,
  ) {}

  public async execute(): Promise<Courses | undefined> {
    const courses = await this.coursesRepository.getAll();
    return courses;
  }
}
export default GetAllCoursesService;
