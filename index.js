import express from 'express';
import cors from 'cors';
import { run } from './src/database/connectToMongo.js';
import bookRoutes from './src/routes/book.routes.js';

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use(run);
app.use('/api/books', bookRoutes);

app.get('/', (_, res) => {
    res.send('womenBrain API');
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta http://localhost:${PORT}`);
});
