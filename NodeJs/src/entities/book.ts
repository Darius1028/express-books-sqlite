import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable } from 'typeorm';
import { Author } from './author';

@Entity()
export class Book {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  chapters: number;

  @Column()
  pages: number;

  @ManyToMany(() => Author, (author) => author.books)
  @JoinTable()
  authors: Author[];
}