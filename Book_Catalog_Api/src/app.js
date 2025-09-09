import express from 'express';
import bookRoutes from './routes/bookRoutes.js';
import errorHandler from './middlewares/errorHandler.js';

const app = express();

app.use(express.json());
app.use('/api/books', bookRoutes);
app.use(errorHandler);

export default app;
