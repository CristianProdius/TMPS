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
Laboratory work nr. 2
</h1>

## Introduction/Theory/Motivation

This laboratory work focuses on the implementation of Structural Design Patterns in software engineering. Structural patterns are concerned with how classes and objects are composed to form larger structures. They use inheritance and composition to create flexible and efficient software designs.

In this project, we extended a book management system by implementing three structural design patterns:

1. Adapter Pattern
2. Decorator Pattern
3. Facade Pattern

The motivation behind using these patterns is to create a more flexible, maintainable, and scalable system that can easily adapt to changes and new requirements.

## Implementation & Explanation

### Project Structure

The project follows a structured directory layout:

```
├── src/
│ ├── app/
│ │ └── page.tsx
│ ├── domain/
│ │ ├── Book.ts
│ │ └── Author.ts
│ ├── patterns/
│ │ ├── adapter/
│ │ │ └── BookSystemAdapter.ts
│ │ ├── decorator/
│ │ │ └── AudioBookDecorator.ts
│ │ └── facade/
│ │ └── BookManagementFacade.ts
│ └── utilities/
│ └── logger.ts
└── package.json
```

### 1. Adapter Pattern

Location: `src/patterns/adapter/BookSystemAdapter.ts`

The Adapter pattern allows incompatible interfaces to work together. In our case, we used it to adapt a legacy book system to our modern book management system.

```typescript
export class BookSystemAdapter {
  private legacySystem: LegacyBookSystem;

  constructor(legacySystem: LegacyBookSystem) {
    this.legacySystem = legacySystem;
  }

  fetchBookInfo(id: number): { title: string; author: string } {
    const legacyInfo = this.legacySystem.getBookInfo(id);
    // Convert legacy info to modern format
    // ...
  }

  fetchBookYear(id: number): number {
    return this.legacySystem.getBookYear(id);
  }
}
```

This adapter allows our modern system to work with the legacy system without modifying the legacy code.

### 2. Decorator Pattern

Location: src/patterns/decorator/AudioBookDecorator.ts
The Decorator pattern allows behavior to be added to individual objects dynamically. We used it to add audio book functionality to our basic book objects.

```
export class AudioBookDecorator extends Book {
  constructor(private book: Book, public duration: number = 180) {
    super(book.title, book.author, book.year);
  }

  getDescription(): string {
    return `Audio version of "${this.book.getDetails()}" (Duration: ${this.duration} minutes)`;
  }
}
```

This decorator adds audio book-specific information without altering the basic Book class.

### 3. Facade Pattern

Location: src/patterns/facade/BookManagementFacade.ts
The Facade pattern provides a simplified interface to a complex subsystem. We used it to encapsulate the book fetching and creation process.

```
export class BookManagementFacade {
  private bookSystem: BookSystemAdapter;

  constructor(bookSystem: BookSystemAdapter) {
    this.bookSystem = bookSystem;
  }

  getBookDetails(id: number): string {
    // Fetch book info, create book object, apply decorator
    // ...
    return audioBook.getDescription();
  }
}
```

This facade simplifies the process of fetching and formatting book details for the client.

### Results/Screenshots/Conclusions

The implementation of these structural design patterns has resulted in a more flexible and maintainable book management system. The Adapter pattern allows us to integrate legacy systems seamlessly. The Decorator pattern enables us to add new functionalities (like audio book features) without modifying existing code. The Facade pattern simplifies the client's interaction with the complex subsystem.
Screenshot of the running application:

![Alt text](./public/image.png)

### Conclusions:

Structural design patterns provide powerful tools for creating flexible and scalable software designs.
The Adapter pattern is crucial for integrating legacy systems or third-party libraries with incompatible interfaces.
The Decorator pattern allows for dynamic addition of behaviors, promoting the open-closed principle.
The Facade pattern simplifies client interaction with complex subsystems, improving code readability and maintainability.
By implementing these patterns, we've created a system that's not only functional but also adaptable to future changes and extensions.

### References

Gamma, E., Helm, R., Johnson, R., & Vlissides, J. (1994). Design Patterns: Elements of Reusable Object-Oriented Software. Addison-Wesley.
Freeman, E., Robson, E., Bates, B., & Sierra, K. (2004). Head First Design Patterns. O'Reilly Media.
