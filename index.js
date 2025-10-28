import express from 'express';
import cors from 'cors';
import { connectToMongo } from './src/database/connectToMongo.js';
import bookRoutes from './src/routes/book.routes.js';
import 'dotenv/config';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

app.use('/books', bookRoutes);

app.get('/', (_, res) => {
  res.send('womenBrain API está no ar 🚀');
});

const startServer = async () => {
  await connectToMongo();
  
  app.listen(PORT, () => {
    console.log(`Servidor rodando na porta http://localhost:${PORT}`);
  });
};

startServer();