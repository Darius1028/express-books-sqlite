import { ConnectionOptions, createConnection } from "typeorm"

const options: ConnectionOptions = {
  type: 'sqlite',
  database: 'database.sqlite',
  entities: [__dirname + '/entities/*.ts'],
  synchronize: true,
  logging: true
}


export const connectDatabase = async () => {
  return createConnection(options);
}

