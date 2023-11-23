import 'dotenv/config';

const environment = {
    DATABASE_CONNECTION_URL: process.env.POSTGRES_URL,
    SECRET_WORD: process.env.SECRET_WORD,
    SERVER_PORT: process.env.SERVER_PORT,
    DIALECT: process.env.DIALECT
}

export { environment };