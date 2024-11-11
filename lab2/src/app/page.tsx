"use client";

import { useState } from "react";
import { BookSystemAdapter } from "../patterns/adapter/BookSystemAdapter";
import { BookManagementFacade } from "../patterns/facade/BookManagementFacade";
import { logger } from "../utilities/logger";
import { X } from "lucide-react";

interface ILegacyBookSystem {
  getBookInfo(id: number): string;
  getBookYear(id: number): number;
}

class LegacyBookSystem implements ILegacyBookSystem {
  getBookInfo(id: number): string {
    return `Book ${id}: The Great Novel by John Doe`;
  }

  getBookYear(id: number): number {
    return 2020 + id;
  }
}

interface BookDetail {
  id: number;
  details: string;
}

export default function Home() {
  const [bookId, setBookId] = useState<number>(1);
  const [bookDetails, setBookDetails] = useState<BookDetail[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>("");

  const handleFetchBook = async () => {
    setLoading(true);
    setError("");

    if (bookDetails.some((book) => book.id === bookId)) {
      setError("This book ID already exists!");
      setLoading(false);
      return;
    }

    try {
      const legacySystem = new LegacyBookSystem();
      const adapter = new BookSystemAdapter(legacySystem);
      const facade = new BookManagementFacade(adapter);

      const details = facade.getBookDetails(bookId);
      setBookDetails((prev) => [...prev, { id: bookId, details }]);
      logger.info("Successfully fetched book details");
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "An error occurred";
      setError(errorMessage);
      logger.error(`Error fetching book: ${errorMessage}`);
    } finally {
      setLoading(false);
    }
  };

  const handleRemoveBook = (id: number) => {
    setBookDetails((prev) => prev.filter((book) => book.id !== id));
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-8 transition-all duration-300 hover:shadow-2xl">
          <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center animate-fade-in">
            Structural Design Patterns Demo
          </h1>

          <div className="flex flex-col items-center gap-6">
            <div className="flex gap-4 w-full max-w-md">
              <input
                type="number"
                value={bookId}
                onChange={(e) => setBookId(Number(e.target.value))}
                min="1"
                className="flex-1 px-4 py-2 text-black border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200"
                placeholder="Enter Book ID"
              />
              <button
                onClick={handleFetchBook}
                disabled={loading}
                className={`
                  px-6 py-2 rounded-lg text-white font-semibold
                  ${
                    loading
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-blue-600 hover:bg-blue-700 active:bg-blue-800"
                  }
                  transition-all duration-200 transform hover:scale-105
                `}
              >
                {loading ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Fetching...
                  </div>
                ) : (
                  "Fetch Book"
                )}
              </button>
            </div>

            {error && (
              <div className="w-full p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg animate-fade-in">
                {error}
              </div>
            )}

            <div className="w-full space-y-4">
              {bookDetails.map((book) => (
                <div
                  key={book.id}
                  className="p-6 bg-green-50 border border-green-200 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 animate-slide-in"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h2 className="text-lg font-semibold text-gray-800 mb-2">
                        Book ID: {book.id}
                      </h2>
                      <p className="text-gray-600">{book.details}</p>
                    </div>
                    <button
                      onClick={() => handleRemoveBook(book.id)}
                      className="p-1 hover:bg-red-100 rounded-full transition-colors duration-200"
                      aria-label="Remove book"
                    >
                      <X className="w-5 h-5 text-red-500 hover:text-red-700" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 text-center text-gray-600 animate-fade-in">
          <p>Implementation of Adapter, Decorator, and Facade patterns</p>
        </div>
      </div>
    </main>
  );
}
