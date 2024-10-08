class Book:
    def __init__(self, title, author, isbn, price):
        self.title = title
        self.author = author
        self.isbn = isbn
        self.price = price

    def __str__(self):
        return f"{self.title} by {self.author.name} (ISBN: {self.isbn})"