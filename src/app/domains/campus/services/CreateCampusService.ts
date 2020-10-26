import { injectable, inject } from 'tsyringe';
import ICampusRepository from '../repositories/ICampusRepository';
import { Campus } from '../infra/knex/entities/Campus';

@injectable()
class CreateCampusService {
  constructor(
    @inject('CampusRepository')
    private campusRepository: ICampusRepository,
  ) {}

  public async execute({
    name,
  }: {
    name: string;
  }): Promise<Campus | undefined> {
    const campus = await this.campusRepository.save(name);
    return campus;
  }
}
export default CreateCampusService;
