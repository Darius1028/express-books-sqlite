import express from 'express';
import 'reflect-metadata';
import { connectDatabase } from './database';
import router from './routes';

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.use('/api', router);

const startServer = async () => {
  try {
    const data = await connectDatabase();
    app.listen(PORT, () => {
      console.log(`Server port ${PORT}`);
    });
  } catch (error) {
    console.error('Error init server:', error);
  }
};

startServer();