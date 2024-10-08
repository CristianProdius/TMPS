from src.domain.order import Order
from src.factory.book_factory import BookFactory
from src.builder.author_builder import AuthorBuilder
from src.singleton.order_manager import OrderManager

def main():
    # Create authors using Builder pattern
    author1 = AuthorBuilder().set_name("J.K. Rowling").set_birth_year(1965).set_nationality("British").build()
    author2 = AuthorBuilder().set_name("Stephen Hawking").set_birth_year(1942).set_nationality("British").build()

    # Create books using Factory Method pattern
    book_factory = BookFactory()
    book1 = book_factory.create_book("fiction", "Harry Potter", author1, "978-0747532743", 19.99)
    book2 = book_factory.create_book("non_fiction", "A Brief History of Time", author2, "978-0553380163", 14.99)

    # Create orders
    order1 = Order(1, [book1, book2])
    order2 = Order(2, [book1])

    # Use Singleton pattern for OrderManager
    order_manager = OrderManager()
    order_manager.add_order(order1)
    order_manager.add_order(order2)

    # Print results
    print("Books:")
    print(book1)
    print(book2)
    print("\nOrders:")
    print(order1)
    print(order2)
    print(f"\nTotal orders: {order_manager.get_total_orders()}")
    print(f"Total revenue: ${order_manager.get_total_revenue():.2f}")

if __name__ == "__main__":
    main()