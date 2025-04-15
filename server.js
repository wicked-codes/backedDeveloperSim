import express from 'express';
import dotenv from 'dotenv';
import routes from './routes/index.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use('/api', routes);
app.get('/health', (req, res) => {
    res.sendStatus(200);
});

app.listen(PORT);
