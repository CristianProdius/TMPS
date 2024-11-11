import { Book } from "../../domain/Book";
import { BookDecorator } from "./BookDecorator";

export class AudioBookDecorator implements BookDecorator {
  private book: Book;
  private duration: number;

  constructor(book: Book, duration: number = 180) {
    this.book = book;
    this.duration = duration;
  }

  get title(): string {
    return this.book.title;
  }

  get author() {
    return this.book.author;
  }

  get year(): number {
    return this.book.year;
  }

  getDetails(): string {
    return this.book.getDetails();
  }

  getDescription(): string {
    return `Audio version of "${this.book.getDetails()}" (Duration: ${
      this.duration
    } minutes)`;
  }
}
