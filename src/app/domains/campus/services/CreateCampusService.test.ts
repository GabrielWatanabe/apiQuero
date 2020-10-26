import 'reflect-metadata';
import 'jest-chain';
import ICampusRepository from '../repositories/ICampusRepository';
import CreateCampusService from './CreateCampusService';
import { mockedCampusRepository } from '../../../../../__mocks__/campus/CampusRepository.mock';

let service: CreateCampusService;

describe('CreateCampus', () => {
  beforeAll(() => {
    service = new CreateCampusService(
      mockedCampusRepository as ICampusRepository,
    );
  });

  it('Should be able to create a Campus', async () => {
    const campus = await service.execute({
      name: 'New Valid Campus',
    });

    expect(campus).toHaveProperty('id');
  });
});
