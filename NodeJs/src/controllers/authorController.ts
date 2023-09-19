import { Request, Response } from 'express';
import { getRepository, Repository } from 'typeorm';
import { Author } from '../entities/author';


export const createAuthor = async (req: Request, res: Response) => {
  try {
    const authorRepository: Repository<Author> = getRepository(Author);
    const author = authorRepository.create(req.body);
    await authorRepository.save(author);
    res.status(201).json(author);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error create author' });
  }
};

export const getAuthors = async (_req: Request, res: Response) => {
  try {
    const authorRepository: Repository<Author> = getRepository(Author);
    const authors = await authorRepository.find({ relations: ['books'] });
    res.json(authors);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error get authors' });
  }
};
