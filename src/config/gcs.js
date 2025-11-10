import { Storage } from '@google-cloud/storage';
import 'dotenv/config';

const storage = process.env.GCP_KEY_FILE_PATH
  ? new Storage({
      projectId: process.env.GCP_PROJECT_ID,
      keyFilename: process.env.GCP_KEY_FILE_PATH,
    })
  : new Storage(); 

const bucket = storage.bucket(process.env.GCP_BUCKET_NAME);

export default bucket;