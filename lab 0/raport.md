<h1 align="center">Course: TMPS.</h1>
<h4 align="center">Technical University of Moldova  </h4>
<h4 align="center">FCIM   |   UTM   |   Autumn 2024</h4><br><br>

<p align=center>                           
  <img align=center style="height: 50%;
  width: 50%; " src="https://utm.md/wp-content/uploads/2020/12/logo-sigla.png" />
</p>
</br><p align=right>  
p. TMPS
</p>
<p align="right" > student FAF-223, Cristian Prodius</p>
</br><p align=center>  
Chisinau 2024
</p>
<hr></br></br></br>

<h1 align='center'> 
Laboratory work nr. 0
</h1>

# SOLID Principles Implementation Report

## Introduction

This report analyzes a Python code implementation that demonstrates all five SOLID principles of object-oriented programming and design. The code provides a framework for working with geometric shapes, showcasing how these principles can be applied to create a flexible, maintainable, and extensible system.

## Code Overview

The code defines a system for managing different shapes, calculating their areas, and optionally drawing them. It includes abstract base classes, concrete implementations, and utility classes that work together to demonstrate the SOLID principles.

## SOLID Principles Implementation

### 1. Single Responsibility Principle (SRP)

The SRP states that a class should have only one reason to change. This principle is demonstrated in several ways:

- The `Shape` class is responsible only for defining the interface for area calculation.
- Each concrete shape class (e.g., `Rectangle`, `Circle`) is responsible only for implementing its specific area calculation.
- The `AreaCalculator` class is solely responsible for calculating the total area of a collection of shapes.

This separation of concerns makes the code more modular and easier to maintain.

### 2. Open/Closed Principle (OCP)

The OCP states that software entities should be open for extension but closed for modification. This principle is applied through:

- The use of abstract base classes (`Shape` and `Drawable`) that allow new shapes to be added without modifying existing code.
- The `AreaCalculator` class can work with any shape that implements the `Shape` interface, allowing for easy addition of new shapes.

This design allows the system to be extended with new shapes or functionalities without altering existing code.

### 3. Liskov Substitution Principle (LSP)

The LSP states that objects of a superclass should be replaceable with objects of its subclasses without affecting the correctness of the program. This is demonstrated by:

- The `Square` class, which is a subclass of `Rectangle`, can be used anywhere a `Rectangle` is expected.
- All shape subclasses can be used interchangeably in the `AreaCalculator.total_area()` method.

This ensures that the code remains functional and correct when using different shape subclasses.

### 4. Interface Segregation Principle (ISP)

The ISP states that no client should be forced to depend on methods it does not use. This principle is applied through:

- The separation of the `Drawable` interface from the `Shape` interface.
- The `DrawableRectangle` class implements both `Rectangle` and `Drawable` interfaces, allowing clients to use only the methods they need.

This design prevents classes from being forced to implement methods they don't use, leading to a more flexible and maintainable system.

### 5. Dependency Inversion Principle (DIP)

The DIP states that high-level modules should not depend on low-level modules; both should depend on abstractions. This principle is demonstrated by:

- The `AreaCalculator` class depends on the abstract `Shape` interface rather than concrete shape implementations.
- The main code works with the `Shape` abstraction, allowing it to operate on any current or future shape implementation.

This approach makes the system more flexible and easier to extend with new shapes or functionalities.

## Conclusion

The implemented code successfully demonstrates all five SOLID principles. By adhering to these principles, the code achieves a high degree of modularity, flexibility, and maintainability. This design allows for easy extension of the system with new shapes or functionalities while minimizing the risk of introducing bugs or breaking existing functionality.

The use of abstract base classes, interfaces, and dependency injection showcases how SOLID principles can be applied in Python to create a robust and scalable object-oriented design. This implementation serves as a good example of how to structure code to be more maintainable and adaptable to future changes.
