
# Used for the OrderManager to ensure a single instance manages all orders.
class OrderManager:
    _instance = None

    def __new__(cls):
        if cls._instance is None:
            cls._instance = super().__new__(cls)
            cls._instance.orders = []
        return cls._instance

    def add_order(self, order):
        self.orders.append(order)

    def get_total_orders(self):
        return len(self.orders)

    def get_total_revenue(self):
        return sum(order.total_price() for order in self.orders)