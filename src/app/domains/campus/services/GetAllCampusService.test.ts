import 'reflect-metadata';
import 'jest-chain';
import ICampusRepository from '../repositories/ICampusRepository';
import GetAllCampusService from './GetAllCampusService';
import { mockedCampusRepository } from '../../../../../__mocks__/campus/CampusRepository.mock';

let service: GetAllCampusService;

describe('GetAllCampus', () => {
  beforeAll(() => {
    service = new GetAllCampusService(
      mockedCampusRepository as ICampusRepository,
    );
  });

  it('Should be able to get all Campus', async () => {
    const campus = await service.execute();

    expect(campus);
  });
});
