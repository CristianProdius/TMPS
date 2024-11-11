import { Book } from "../../domain/Book";
import { Author } from "../../domain/Author";

interface ILegacyBookSystem {
  getBookInfo(id: number): string;
  getBookYear(id: number): number;
}

export class BookSystemAdapter {
  private legacySystem: ILegacyBookSystem;

  constructor(legacySystem: ILegacyBookSystem) {
    this.legacySystem = legacySystem;
  }

  fetchBook(id: number): Book {
    const bookInfo = this.fetchBookInfo(id);
    const year = this.fetchBookYear(id);

    const author = new Author(bookInfo.author, 1970);
    return new Book(bookInfo.title, author, year);
  }

  private fetchBookInfo(id: number): { title: string; author: string } {
    const legacyInfo = this.legacySystem.getBookInfo(id);
    const matches = legacyInfo.match(/Book \d+: (.*) by (.*)/);

    if (!matches) {
      throw new Error(`Invalid book info format for ID: ${id}`);
    }

    const [, title, authorName] = matches;
    return {
      title: title.trim(),
      author: authorName.trim(),
    };
  }

  private fetchBookYear(id: number): number {
    return this.legacySystem.getBookYear(id);
  }
}
