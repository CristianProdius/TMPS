"use client";

import { useState } from "react";
import { BookSystemAdapter } from "../patterns/adapter/BookSystemAdapter";
import { BookManagementFacade } from "../patterns/facade/BookManagementFacade";

interface LegacyBookSystem {
  getBookInfo(id: number): string;
  getBookYear(id: number): number;
}

class ConcreteLegacyBookSystem implements LegacyBookSystem {
  getBookInfo(id: number): string {
    return JSON.stringify({
      title: `Legacy Title ${id}`,
      author: JSON.stringify({ name: "Legacy Author", birthYear: 1950 }),
    });
  }

  getBookYear(id: number): number {
    return 2000 + id;
  }
}

export default function Home() {
  const [bookDetails, setBookDetails] = useState<string>("");

  const handleFetchBook = () => {
    const legacySystem = new ConcreteLegacyBookSystem();
    const adapter = new BookSystemAdapter(legacySystem);
    const facade = new BookManagementFacade(adapter);
    const details = facade.getBookDetails(1);
    setBookDetails(details);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Structural Design Patterns Demo</h1>
      <button onClick={handleFetchBook}>Fetch Book Details</button>
      {bookDetails && <p>{bookDetails}</p>}
    </main>
  );
}
