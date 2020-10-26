import { injectable, inject } from 'tsyringe';
import LoggerService from '../infra/logging/LoggerService';

@injectable()
export default class Service {
  constructor(
    @inject('LoggerService')
    private loggerService: LoggerService,
  ) {}
}
