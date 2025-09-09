import dotenv from 'dotenv';
import connectDB from './database/connection.js';

dotenv.config();
connectDB();
