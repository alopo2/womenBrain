import { Storage } from '@google-cloud/storage';
import 'dotenv/config';

const storage = new Storage({
  projectId: process.env.GCP_PROJECT_ID,
  credentials: JSON.parse(process.env.GCP_CREDENTIALS), 
});

const bucket = storage.bucket(process.env.GCP_BUCKET_NAME);

export default bucket;