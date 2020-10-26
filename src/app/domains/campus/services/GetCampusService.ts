import { injectable, inject } from 'tsyringe';
import ICampusRepository from '../repositories/ICampusRepository';
import { Campus } from '../infra/knex/entities/Campus';

@injectable()
class GetCampusService {
  constructor(
    @inject('CampusRepository')
    private campusRepository: ICampusRepository,
  ) {}

  public async execute({ id }: { id: number }): Promise<Campus | null> {
    const campus = await this.campusRepository.getById(id);
    return campus;
  }
}
export default GetCampusService;
