import { Book } from "../../domain/Book";

export interface BookDecorator extends Book {
  getDescription(): string;
}
