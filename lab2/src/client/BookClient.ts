import { BookSystemAdapter } from "../patterns/adapter/BookSystemAdapter";
import { AudioBookDecorator } from "../patterns/decorator/AudioBookDecorator";
import { logger } from "../utilities/logger";

export class BookClient {
  private bookSystem: BookSystemAdapter;

  constructor() {
    this.bookSystem = new BookSystemAdapter();
  }

  getBookDetails(id: number): string {
    logger.info(`Fetching book with id: ${id}`);
    const book = this.bookSystem.fetchBook(id);
    const audioBook = new AudioBookDecorator(book, 180); // 180 minutes duration
    logger.info(`Retrieved book: ${audioBook.getDetails()}`);
    return audioBook.getDetails();
  }
}
