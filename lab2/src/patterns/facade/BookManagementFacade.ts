import { Book } from "../../domain/Book";
import { BookSystemAdapter } from "../adapter/BookSystemAdapter";
import { AudioBookDecorator } from "../decorator/AudioBookDecorator";
import { logger, LogLevel } from "../../utilities/logger";
import { Author } from "../../domain/Author";

export class BookManagementFacade {
  private bookSystem: BookSystemAdapter;

  constructor(bookSystem: BookSystemAdapter) {
    this.bookSystem = bookSystem;
  }

  getBookDetails(id: number): string {
    const bookInfo = this.bookSystem.fetchBookInfo(id);
    const bookYear = this.bookSystem.fetchBookYear(id);
    const authorInfo = JSON.parse(bookInfo.author);
    const author = new Author(authorInfo.name, authorInfo.birthYear);
    const book = new Book(bookInfo.title, author, bookYear);
    const audioBook = new AudioBookDecorator(book);
    logger.log(
      LogLevel.INFO,
      `Fetched book details: ${JSON.stringify({ ...bookInfo, year: bookYear })}`
    );
    return audioBook.getDescription();
  }
}
