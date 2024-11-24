import { Book } from "@/domain/Book";
import { BookOperationStrategy } from "./BookOperationStrategy";
import { logger } from "@/utilities/logger";

export class AddBookStrategy implements BookOperationStrategy {
  execute(book: Book): string {
    logger.info(`Adding book: ${book.title}`);
    return `Added book: ${book.getDetails()}`;
  }
}
