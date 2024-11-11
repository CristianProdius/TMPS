import { Book } from "../../domain/Book";
import { Author } from "../../domain/Author";
import { BookSystemAdapter } from "../adapter/BookSystemAdapter";
import { AudioBookDecorator } from "../decorator/AudioBookDecorator";
import { logger } from "../../utilities/logger";

export class BookManagementFacade {
  private bookSystem: BookSystemAdapter;

  constructor(bookSystem: BookSystemAdapter) {
    this.bookSystem = bookSystem;
  }

  getBookDetails(id: number): string {
    try {
      const book = this.bookSystem.fetchBook(id);
      const audioBook = new AudioBookDecorator(book);

      logger.info(`Retrieved book details for ID ${id}: ${book.getDetails()}`);

      return audioBook.getDescription();
    } catch (error) {
      logger.error(`Error getting book details for ID ${id}: ${error}`);
      throw new Error(`Failed to get book details: ${error}`);
    }
  }

  createBook(
    title: string,
    authorName: string,
    authorBirthYear: number,
    year: number
  ): Book {
    try {
      const author = new Author(authorName, authorBirthYear);
      const book = new Book(title, author, year);
      logger.info(`Created new book: ${book.getDetails()}`);
      return book;
    } catch (error) {
      logger.error(`Error creating book: ${error}`);
      throw new Error(`Failed to create book: ${error}`);
    }
  }

  createAudioBook(book: Book, duration: number): AudioBookDecorator {
    try {
      const audioBook = new AudioBookDecorator(book, duration);
      logger.info(`Created audio book: ${audioBook.getDescription()}`);
      return audioBook;
    } catch (error) {
      logger.error(`Error creating audio book: ${error}`);
      throw new Error(`Failed to create audio book: ${error}`);
    }
  }
}
