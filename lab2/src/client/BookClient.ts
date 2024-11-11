import { BookSystemAdapter } from "../patterns/adapter/BookSystemAdapter";
import { AudioBookDecorator } from "../patterns/decorator/AudioBookDecorator";
import { logger } from "../utilities/logger";

interface ILegacyBookSystem {
  getBookInfo(id: number): string;
  getBookYear(id: number): number;
}

class LegacyBookSystem implements ILegacyBookSystem {
  getBookInfo(id: number): string {
    return `Book ${id}: Sample Book by Sample Author`;
  }

  getBookYear(id: number): number {
    return 2023;
  }
}

export class BookClient {
  private bookSystem: BookSystemAdapter;

  constructor() {
    const legacySystem = new LegacyBookSystem();
    this.bookSystem = new BookSystemAdapter(legacySystem);
  }

  getBookDetails(id: number): string {
    try {
      logger.info(`Fetching book with id: ${id}`);
      const book = this.bookSystem.fetchBook(id);

      if (!book) {
        throw new Error("Book not found");
      }

      const audioBook = new AudioBookDecorator(book, 180);
      logger.info(`Retrieved book: ${audioBook.getDetails()}`);
      return audioBook.getDetails();
    } catch (error) {
      logger.error(`Error fetching book: ${error}`);
      throw error;
    }
  }
}
