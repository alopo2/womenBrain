import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.get('/', (_, res) => {
    res.send('womenBrain API');
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
