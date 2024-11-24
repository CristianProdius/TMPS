import { Book } from "@/domain/Book";

export interface BookOperationStrategy {
  execute(book: Book): string;
}
