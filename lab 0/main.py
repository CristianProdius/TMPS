from abc import ABC, abstractmethod
import math

# Single Responsibility Principle: Each class has a single responsibility
class Shape(ABC):
    """Abstract base class for shapes. Defines the interface for area calculation."""
    @abstractmethod
    def area(self):
        """Calculate the area of the shape."""
        pass

# Open/Closed Principle: Open for extension, closed for modification
class Rectangle(Shape):
    """Concrete implementation of a rectangle shape."""
    def __init__(self, width, height):
        self.width = width
        self.height = height

    def area(self):
        """Calculate area of the rectangle."""
        return self.width * self.height

class Circle(Shape):
    """Concrete implementation of a circle shape."""
    def __init__(self, radius):
        self.radius = radius

    def area(self):
        """Calculate area of the circle."""
        return math.pi * (self.radius ** 2)

# Liskov Substitution Principle: Subclasses can be used interchangeably with their base class
class Square(Rectangle):
    """Square is a special case of Rectangle."""
    def __init__(self, side):
        super().__init__(side, side)

# Interface Segregation Principle: Clients should not be forced to depend on methods they do not use
class Drawable(ABC):
    """Interface for drawable shapes."""
    @abstractmethod
    def draw(self):
        """Draw the shape."""
        pass

class DrawableRectangle(Rectangle, Drawable):
    """Rectangle that can be drawn."""
    def draw(self):
        """Implement drawing for rectangle."""
        print(f"Drawing a rectangle with width {self.width} and height {self.height}")

# Dependency Inversion Principle: High-level modules should not depend on low-level modules
class AreaCalculator:
    """Class to calculate total area of shapes."""
    @staticmethod
    def total_area(shapes):
        """Calculate total area of the provided shapes."""
        return sum(shape.area() for shape in shapes)

if __name__ == '__main__':
    shapes = [Rectangle(10, 5), Circle(7), Square(4), DrawableRectangle(3, 6)]
    print(f"Total area: {AreaCalculator.total_area(shapes)}")
    
    for shape in shapes:
        if isinstance(shape, Drawable):
            shape.draw()