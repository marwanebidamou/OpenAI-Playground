import express, { Application } from 'express';
import morgan from 'morgan';
import { PORT } from './config/env.config';

const app: Application = express();

app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));

app.use(express.json());


// 404 Not Found Middleware
app.use((req, res, next) => {
    res.status(404).json({ error: 'Resource not found' });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});