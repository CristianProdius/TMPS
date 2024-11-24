import { Book } from "../../domain/Book";
import { Author } from "../../domain/Author";

interface BookData {
  id: number;
  title: string;
  author: {
    name: string;
    birthYear: number;
  };
  year: number;
}

export class BookSystemAdapter {
  private legacySystem: any;

  constructor(legacySystem: any) {
    this.legacySystem = legacySystem;
  }

  private async fetchBooksData(): Promise<BookData[]> {
    try {
      const response = await fetch("/data/books.json");
      if (!response.ok) {
        throw new Error("Failed to fetch books data");
      }
      const data = await response.json();
      return data.books;
    } catch (error) {
      console.error("Error loading books:", error);
      return [];
    }
  }

  async fetchBook(id: number): Promise<Book> {
    const books = await this.fetchBooksData();
    const bookData = books.find((book) => book.id === id);

    if (!bookData) {
      throw new Error(`Book with id ${id} not found`);
    }

    const author = new Author(bookData.author.name, bookData.author.birthYear);

    return new Book(bookData.title, author, bookData.year, bookData.id);
  }
}
