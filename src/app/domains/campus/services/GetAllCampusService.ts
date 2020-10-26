import { injectable, inject } from 'tsyringe';
import ICampusRepository from '../repositories/ICampusRepository';
import { Campus } from '../infra/knex/entities/Campus';

@injectable()
class GetAllCampusService {
  constructor(
    @inject('CampusRepository')
    private campusRepository: ICampusRepository,
  ) {}

  public async execute(): Promise<Campus | undefined> {
    const campus = await this.campusRepository.getAll();
    return campus;
  }
}
export default GetAllCampusService;
