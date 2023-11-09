import { config } from 'dotenv';

config();

const environment = {
    DATABASE_CONNECTION_URL: process.env.POSTGRES_URL
}

export { environment };