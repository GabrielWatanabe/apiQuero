import { createTerminus } from '@godaddy/terminus';

import app from './app';
import LoggerService from '../logging/LoggerService';

const loggerService = new LoggerService();
const logger = loggerService.create('bootstrap');

const onSignal = () => {
  logger.info('server is starting cleanup');
  return Promise.resolve();
};

const onShutdown = () => {
  logger.info('cleanup finished, server is shutting down');
  return Promise.resolve();
};

const onHealthCheck = async () => {
  logger.info('everything is okay');
  return Promise.resolve('UP');
};

app.get('/', (req, res) => {
  res.send('Application is Up');
});

const terminusConfiguration = Object.freeze({
  logger: logger.info,
  signal: 'SIGINT',
  healthChecks: {
    '/health': onHealthCheck,
    verbatim: true,
  },
  onSignal,
  onShutdown,
});

logger.info(terminusConfiguration);
const port = process.env.PORT || 4000;

createTerminus(app, terminusConfiguration).listen(port, () => {
  logger.info(`🚀 Server ready at ${port}`);
});
