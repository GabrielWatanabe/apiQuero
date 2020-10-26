import dotenv from 'dotenv';

dotenv.config();

const Knex = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: `${__dirname}/dev.sqlite3`,
    },
    useNullAsDefault: true,
  },

  staging: {
    client: 'postgresql',
    connection: {
      host: process.env.DATABASE_HOSTNAME,
      database: process.env.DATABASE_NAME,
      user: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
      port: process.env.DATABASE_PORT,
    },
    pool: {
      min: process.env.DATABASE_POOL_MIN,
      max: process.env.DATABASE_POOL_MAX,
      idle: process.env.DATABASE_POOL_IDLE,
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: `${__dirname}/src/app/shared/infra/knex/migrations`,
    },
    seeds: {
      directory: `${__dirname}/src/app/shared/infra/knex/seeds`,
    },
  },

  production: {
    client: 'postgresql',
    connection: {
      host: process.env.DATABASE_HOSTNAME,
      database: process.env.DATABASE_NAME,
      user: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
      port: process.env.DATABASE_PORT,
    },
    pool: {
      min: process.env.DATABASE_POOL_MIN,
      max: process.env.DATABASE_POOL_MAX,
      idle: process.env.DATABASE_POOL_IDLE,
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: `${__dirname}/src/app/shared/infra/knex/migrations`,
    },
    seeds: {
      directory: `${__dirname}/src/app/shared/infra/knex/seeds`,
    },
  },
};

module.exports = Knex;
