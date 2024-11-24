// client/BookClient.ts
import { BookSystemAdapter } from "../patterns/adapter/BookSystemAdapter";
import { AudioBookDecorator } from "../patterns/decorator/AudioBookDecorator";
import { BookOperationStrategy } from "../patterns/strategy/BookOperationStrategy";
import { BookDetailsStrategy } from "../patterns/strategy/BookDetailsStrategy";
import { logger } from "../utilities/logger";
import { LegacyBookSystem } from "@/patterns/adapter/LegacyBookSystem";

export class BookClient {
  private bookSystem: BookSystemAdapter;
  private strategy: BookOperationStrategy;

  constructor(strategy?: BookOperationStrategy) {
    const legacySystem = new LegacyBookSystem();
    this.bookSystem = new BookSystemAdapter(legacySystem);
    this.strategy = strategy || new BookDetailsStrategy();
  }

  setStrategy(strategy: BookOperationStrategy) {
    this.strategy = strategy;
  }

  async getBookDetails(id: number): Promise<string> {
    try {
      logger.info(`Fetching book with id: ${id}`);
      const book = this.bookSystem.fetchBook(id);

      if (!book) {
        throw new Error("Book not found");
      }

      const audioBook = new AudioBookDecorator(await book, 180);
      const result = this.strategy.execute(audioBook);
      logger.info(`Processed book: ${result}`);
      return result;
    } catch (error) {
      logger.error(`Error fetching book: ${error}`);
      throw error;
    }
  }
}
