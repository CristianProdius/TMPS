import { Author } from "./Author";

export class Book {
  constructor(
    public title: string,
    public author: Author,
    public year: number,
    public id?: number
  ) {}

  getDetails(): string {
    return `${this.title} by ${this.author.name} (${this.year})`;
  }
}
