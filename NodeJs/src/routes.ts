import { Router } from 'express';
import {
  createBook,
  getBooks,
  getAveragePagesPerChapter
} from './controllers/bookController';
import { 
  createAuthor, 
  getAuthors 
} from './controllers/authorController';

const router = Router();

router.post('/books', createBook);
router.get('/books', getBooks);
router.get('/books/:id/averagePagesPerChapter', getAveragePagesPerChapter);
router.post('/authors', createAuthor);
router.get('/authors', getAuthors);

export default router;