import express, { Application } from 'express';
import morgan from 'morgan';
import { PORT } from './config/env.config';
import addressRouter from './routes/routes';

const app: Application = express();

app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));

app.use(express.json());

app.use("/api", addressRouter);

// 404 Not Found Middleware
app.use((req, res, next) => {
    res.status(404).json({ error: 'Resource not found' });
});

// Error middleware
app.use((error, req, res, next) => {
    res.status(500).json({ error: 'Internal server error' });
});


app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});