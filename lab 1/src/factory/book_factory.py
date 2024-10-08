from src.domain.book import Book

#Used to create different types of books (fiction and non-fiction).
class BookFactory:
    @staticmethod
    def create_book(book_type, title, author, isbn, price):
        if book_type == "fiction":
            return FictionBook(title, author, isbn, price)
        elif book_type == "non_fiction":
            return NonFictionBook(title, author, isbn, price)
        else:
            return Book(title, author, isbn, price)

class FictionBook(Book):
    def __str__(self):
        return f"Fiction: {super().__str__()}"

class NonFictionBook(Book):
    def __str__(self):
        return f"Non-Fiction: {super().__str__()}"