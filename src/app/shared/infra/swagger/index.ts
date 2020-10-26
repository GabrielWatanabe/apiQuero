import * as dotenv from 'dotenv';
import { healthCheck } from './healthCheck.swagger';

dotenv.config();

export const swaggerDocument = {
  swagger: '2.0',
  info: {
    version: '1.0.0',
    title: '',
    description: 'Documentação de API',
    termsOfService: '',
    contact: {
      name: 'Mateus Siqueira',
      email: 'mateus.carneiro@pixfy.tech',
      url: '',
    },
    license: {
      name: 'Apache 2.0',
      url: 'https://www.apache.org/licenses/LICENSE-2.0.html',
    },
  },
  securityDefinitions: {
    bearerAuth: {
      type: 'apiKey',
      name: 'Authorization',
      in: 'header',
      description: 'Example: Bearer token',
    },
  },
  servers: [
    {
      url: `http://localhost:${process.env.PORT}/`,
      description: 'Local server',
    },
    {
      url: '',
      description: 'DEV ENV',
    },
    {
      url: '',
      description: 'QA ENV',
    },
    {
      url: '',
      description: 'PROD ENV',
    },
  ],
  paths: {
    '/healthcheck': {
      get: healthCheck,
    },
  },
};
