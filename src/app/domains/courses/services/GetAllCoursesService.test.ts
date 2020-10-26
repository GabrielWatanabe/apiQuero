import 'reflect-metadata';
import 'jest-chain';
import ICoursesRepository from '../repositories/ICoursesRepository';
import GetAllCoursesService from './GetAllCoursesService';
import { mockedCoursesRepository } from '../../../../../__mocks__/courses/CoursesRepository.mock';

let service: GetAllCoursesService;

describe('GetAllCourses', () => {
  beforeAll(() => {
    service = new GetAllCoursesService(
      mockedCoursesRepository as ICoursesRepository,
    );
  });

  it('Should be able to get all courses', async () => {
    const courses = await service.execute();

    expect(courses);
  });
});
