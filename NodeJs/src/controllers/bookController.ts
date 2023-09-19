import { Request, Response } from 'express';
import { getRepository, Repository } from 'typeorm';
import { Book } from '../entities/book';


export const createBook = async (req: Request, res: Response) => {
  try {
    const bookRepository: Repository<Book> = getRepository(Book);
    const book = bookRepository.create(req.body);
    await bookRepository.save(book);
    res.status(201).json(book);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error create book' });
  }
};

export const getBooks = async (_req: Request, res: Response) => {
  try {
    const bookRepository: Repository<Book> = getRepository(Book);
    const books = await bookRepository.find();
    res.json(books);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error get books' });
  }
};

export const getAveragePagesPerChapter = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const options = { where: { id: parseInt(id, 10) } };
    const bookRepository = getRepository(Book);
    const book = await bookRepository.findOneOrFail(options);
    const promedio = (book.pages / book.chapters).toFixed(2);
    res.json({ id: book.id, promedio });
  } catch (error) {
    console.error(error);
    res.status(404).json({ error: 'Error get books' });
  }
};

