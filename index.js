import express from 'express';
import cors from 'cors';
import { connectToMongo } from './src/database/connectToMongo.js';
import bookRoutes from './src/routes/book.routes.js';

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());


app.get('/', (_, res) => {
  res.send('womenBrain API está no ar 🚀');
});


app.use('/books', bookRoutes);

const startServer = async () => {
  await connectToMongo();
  
  app.listen(PORT, () => {
    console.log(`Servidor rodando na porta http://localhost:${PORT}`);
  });
};

startServer();