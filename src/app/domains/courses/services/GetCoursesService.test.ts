import 'reflect-metadata';
import 'jest-chain';
import ICoursesRepository from '../repositories/ICoursesRepository';
import GetCoursesService from './GetCoursesService';
import { mockedCoursesRepository } from '../../../../../__mocks__/courses/CoursesRepository.mock';

let service: GetCoursesService;

describe('GetCourse', () => {
  beforeAll(() => {
    service = new GetCoursesService(
      mockedCoursesRepository as ICoursesRepository,
    );
  });

  it('Should be able to get a course', async () => {
    const course = await service.execute({
      id: 2,
    });

    expect(course).toHaveProperty('id');
  });
});
