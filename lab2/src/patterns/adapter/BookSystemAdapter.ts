import { Book } from "../../domain/Book";
import { Author } from "../../domain/Author";

interface LegacyBookSystem {
  getBookInfo(id: number): string;
  getBookYear(id: number): number;
}

export class BookSystemAdapter {
  private legacySystem: LegacyBookSystem;

  constructor(legacySystem: LegacyBookSystem) {
    this.legacySystem = legacySystem;
  }

  fetchBookInfo(id: number): { title: string; author: string } {
    const legacyInfo = this.legacySystem.getBookInfo(id);
    const [, title, authorName] =
      legacyInfo.match(/Book \d+: (.*) by (.*)/) || [];
    const author = JSON.stringify({ name: authorName, birthYear: 1970 }); // Assuming birth year for simplicity
    return { title, author };
  }

  fetchBookYear(id: number): number {
    return this.legacySystem.getBookYear(id);
  }
}
