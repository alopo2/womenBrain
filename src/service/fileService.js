import bucket from '../config/gcs.js';

export const uploadFileToGCS = async (file) => {
  return new Promise((resolve, reject) => {
    const blob = bucket.file(Date.now() + '-' + file.originalname);
    const blobStream = blob.createWriteStream({
      resumable: false,
      contentType: file.mimetype,
    });

    blobStream.on('error', (err) => {
      reject(err);
    });

    blobStream.on('finish', async () => {
      
      const publicUrl = `https://storage.googleapis.com/${bucket.name}/${blob.name}`;
      resolve({
        url: publicUrl,
        name: file.originalname,
        type: file.mimetype,
        size: file.size,
      });
    });

    blobStream.end(file.buffer);
  });
};