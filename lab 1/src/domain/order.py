class Order:
    def __init__(self, order_id, books):
        self.order_id = order_id
        self.books = books

    def total_price(self):
        return sum(book.price for book in self.books)

    def __str__(self):
        return f"Order {self.order_id}: {len(self.books)} books, total: ${self.total_price():.2f}"