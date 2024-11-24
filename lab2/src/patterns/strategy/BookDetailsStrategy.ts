import { Book } from "@/domain/Book";
import { BookOperationStrategy } from "./BookOperationStrategy";
import { logger } from "@/utilities/logger";

export class BookDetailsStrategy implements BookOperationStrategy {
  execute(book: Book): string {
    logger.info(`Retrieving details for book: ${book.title}`);
    return book.getDetails();
  }
}
