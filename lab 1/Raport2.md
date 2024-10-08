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
Laboratory work nr. 1
</h1>

# Creational Design Patterns Implementation

## Project Overview

This project demonstrates the implementation of creational design patterns in a simple online bookstore system. The system manages books, authors, and orders, showcasing the use of three key creational design patterns: Factory Method, Builder, and Singleton.

## Design Patterns Implemented

1. **Factory Method**: Used for creating different types of books.
2. **Builder**: Employed for flexible author object creation.
3. **Singleton**: Implemented for the OrderManager to ensure a single global instance.

## Project Structure

lab 1/
│
├── src/
│ ├── domain/
│ │ ├── init.py
│ │ ├── book.py
│ │ ├── author.py
│ │ └── order.py
│ │
│ ├── factory/
│ │ ├── init.py
│ │ └── book_factory.py
│ │
│ ├── builder/
│ │ ├── init.py
│ │ └── author_builder.py
│ │
│ ├── singleton/
│ │ ├── init.py
│ │ └── order_manager.py
│ │
│ └── init.py
│
├── main.py
│
└── Raport2.md

## Detailed Component Description

### 1. Domain Models

#### Book (`src/domain/book.py`)

- Represents a book with attributes like title, author, ISBN, and price.
- Base class for specific book types (Fiction and Non-Fiction).

#### Author (`src/domain/author.py`)

- Represents an author with name, birth year, and nationality.

#### Order (`src/domain/order.py`)

- Represents a customer order containing multiple books.
- Includes methods to calculate total price.

### 2. Factory Method Pattern (`src/factory/book_factory.py`)

- **Purpose**: Creates different types of books (Fiction and Non-Fiction) without exposing the instantiation logic.
- **Implementation**:
  - `BookFactory` class with a static `create_book` method.
  - Creates `FictionBook` or `NonFictionBook` based on the `book_type` parameter.
- **Benefit**: Allows easy extension for new book types without modifying existing code.

### 3. Builder Pattern (`src/builder/author_builder.py`)

- **Purpose**: Provides a flexible way to create `Author` objects with many optional parameters.
- **Implementation**:
  - `AuthorBuilder` class with methods to set individual attributes.
  - Uses method chaining for a fluent interface.
  - `build()` method to create the final `Author` object.
- **Benefit**: Simplifies the creation of complex objects, especially when many parameters are optional.

### 4. Singleton Pattern (`src/singleton/order_manager.py`)

- **Purpose**: Ensures a single global instance of the `OrderManager` throughout the application.
- **Implementation**:
  - Uses Python's `__new__` method to control instance creation.
  - Maintains a list of orders and provides methods to add orders and calculate totals.
- **Benefit**: Provides a global point of access to the order management functionality, ensuring consistency across the application.

## Main Application (`main.py`)

The main script demonstrates the usage of all implemented design patterns:

1. Creates authors using the Builder pattern.
2. Creates books using the Factory Method pattern.
3. Creates orders and manages them using the Singleton OrderManager.
4. Displays the created objects and calculated totals.

## Conclusion

This project successfully demonstrates the implementation and practical use of three fundamental creational design patterns in the context of an online bookstore system. Each pattern addresses specific object creation challenges:

- The Factory Method provides flexibility in creating different types of books.
- The Builder pattern simplifies the creation of Author objects with multiple optional attributes.
- The Singleton pattern ensures centralized management of orders.

By utilizing these patterns, the project achieves a more flexible, maintainable, and extensible design, showcasing the benefits of applying design patterns in software development.
