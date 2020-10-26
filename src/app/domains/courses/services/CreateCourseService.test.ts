import 'reflect-metadata';
import 'jest-chain';
import ICoursesRepository from '../repositories/ICoursesRepository';
import CreateCourseService from './CreateCourseService';
import { mockedCoursesRepository } from '../../../../../__mocks__/courses/CoursesRepository.mock';

let service: CreateCourseService;

describe('CreateCourse', () => {
  beforeAll(() => {
    service = new CreateCourseService(
      mockedCoursesRepository as ICoursesRepository,
    );
  });

  it('Should be able to create a course', async () => {
    const course = await service.execute({
      name: 'New Valid Course',
    });

    expect(course).toHaveProperty('id');
  });
});
