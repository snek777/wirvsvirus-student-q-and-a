import { MongoClient } from 'mongodb';
import config from './config';

const dbClient = new MongoClient(config.db.url, { useUnifiedTopology: true, useNewUrlParser: true });

const getDb = async () => {
  if (!dbClient.isConnected()) {
    await dbClient.connect();
  }
  return dbClient.db(config.db.name);
};

export const getAutoIncrementId = async (key: string) => {
  const { value } = await (await getDb()).collection<{ _id: string; seq: number }>('sequences').findOneAndUpdate(
    { _id: `autoid_${key}` },
    { $inc: { seq: 1 } },
    {
      upsert: true,
      returnOriginal: false
    }
  );
  return value!.seq;
};

export const resetAutoIncrementId = async (key: string) =>
  (await getDb()).collection('sequences').deleteOne({ _id: `autoid_${key}` });

export const disconnectFromDb = () => dbClient.close();

export default getDb;
