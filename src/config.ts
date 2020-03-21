import dotenv from 'dotenv';

dotenv.config();

const config = {
  port: parseInt(process.env.PORT!),
  jwtSecret: process.env.JWT_SECRET!,
  db: { url: process.env.MONGO_URL!, name: process.env.MONGO_DB_NAME! }
};

export default config;
