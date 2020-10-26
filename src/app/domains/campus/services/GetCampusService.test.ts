import 'reflect-metadata';
import 'jest-chain';
import ICampusRepository from '../repositories/ICampusRepository';
import GetCampusService from './GetCampusService';
import { mockedCampusRepository } from '../../../../../__mocks__/campus/CampusRepository.mock';

let service: GetCampusService;

describe('GetCampus', () => {
  beforeAll(() => {
    service = new GetCampusService(mockedCampusRepository as ICampusRepository);
  });

  it('Should be able to get a Campus', async () => {
    const campus = await service.execute({
      id: 2,
    });

    expect(campus).toHaveProperty('id');
  });
});
