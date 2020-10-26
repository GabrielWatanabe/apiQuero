import { container } from 'tsyringe';

import '../../domains/courses/container';

import LoggerService from '../infra/logging/LoggerService';

container.registerSingleton<LoggerService>('LoggerService', LoggerService);
