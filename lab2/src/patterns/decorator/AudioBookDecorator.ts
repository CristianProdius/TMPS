import { Book } from "../../domain/Book";

export class AudioBookDecorator extends Book {
  constructor(private book: Book, public duration: number = 180) {
    super(book.title, book.author, book.year);
  }

  getDescription(): string {
    return `Audio version of "${this.book.getDetails()}" (Duration: ${
      this.duration
    } minutes)`;
  }
}
