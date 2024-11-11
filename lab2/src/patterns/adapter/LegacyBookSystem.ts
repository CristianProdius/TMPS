export class LegacyBookSystem {
  getBookInfo(id: number): string {
    return `Book ${id}: Legacy Book Title by Legacy Author`;
  }

  getBookYear(id: number): number {
    return 2020;
  }
}
