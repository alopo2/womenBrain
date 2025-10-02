import express from 'express';
import cors from 'cors';
import { run } from './src/database/connectToMongo.js';

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use(run)

app.get('/', (_, res) => {
    res.send('womenBrain API');
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
