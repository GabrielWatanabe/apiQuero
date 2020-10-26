import { injectable, inject } from 'tsyringe';
import ICoursesRepository from '../repositories/ICoursesRepository';
import { Courses } from '../infra/knex/entities/Courses';

@injectable()
class CreateCoursesService {
  constructor(
    @inject('CoursesRepository')
    private coursesRepository: ICoursesRepository,
  ) {}

  public async execute({
    name,
  }: {
    name: string;
  }): Promise<Courses | undefined> {
    const courses = await this.coursesRepository.save(name);
    return courses;
  }
}
export default CreateCoursesService;
