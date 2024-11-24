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
Laboratory work nr. 3
</h1>

# Introduction/Motivation

In laboratory number 3, the focus shifted to Behavioral Design Patterns. I have extended my previous work by implementing the Strategy pattern to make the system more dynamic and adaptable to different book processing behaviors.

# Theory

Behavioral design patterns are concerned with communication between objects, focusing on how objects interact and distribute responsibilities. These patterns address complex flow control that would be difficult to follow at runtime. The behavioral design patterns include:

- Chain of Responsibility
- Command
- Iterator
- Mediator
- Memento
- Observer
- State
- Strategy
- Template Method
- Visitor

Each pattern serves a specific purpose in object interaction:

## Strategy

The Strategy pattern enables defining a family of algorithms, encapsulating each one, and making them interchangeable. It lets the algorithm vary independently from clients that use it. In our case, it allows different book processing behaviors to be switched dynamically through a simple mode toggle.

## Command

Command pattern encapsulates a request as an object, thereby letting you parameterize clients with different requests, queue or log requests, and support undoable operations.

## Observer

Observer defines a one-to-many dependency between objects so that when one object changes state, all its dependents are notified and updated automatically.

## State

State allows an object to alter its behavior when its internal state changes, appearing to change its class.

## Template Method

Template Method defines the skeleton of an algorithm in a method, deferring some steps to subclasses. It lets subclasses redefine certain steps of an algorithm without changing the algorithm's structure.

# Implementation Motivation

The motivation for implementing the Strategy pattern in our Book Management System was to:

- Allow dynamic switching between different book processing behaviors
- Maintain clean separation between different processing algorithms
- Enable easy addition of new processing strategies
- Make the system more flexible and maintainable

The Strategy pattern was chosen because it provides a clean way to switch between different book processing modes (Add and View) without modifying the core system logic. This implementation demonstrates how behavioral patterns can enhance system flexibility while maintaining code clarity and separation of concerns.

The implementation includes an Add Mode and View Mode toggle, demonstrating how different strategies can be selected at runtime to process books differently based on user requirements. This approach makes the system more adaptable to future changes and new processing requirements.

## Implementation & Explanation

### Project Structure

The structure of my project is this one:

```
├── src/
│ ├── app/
│ │ └── page.tsx
│ ├── client/
│ │ └── BookClioent.ts
│ ├── domain/
│ │ ├── Book.ts
│ │ └── Author.ts
│ ├── patterns/
│ │ ├── adapter/
│ │ | ├── LegacyBookSystem.ts
│ │ │ └── BookSystemAdapter.ts
│ │ ├── decorator/
│ │ | ├── BookDecorator.ts
│ │ │ └── AudioBookDecorator.ts
│ │ └── facade/
│ │ └── BookManagementFacade.ts
│ └── utilities/
|    |   jsonStorage.ts
│    └── logger.ts
└── package.json
```

### 1. STRATEGY Pattern

The Strategy pattern was implemented in this Book Management System to:

1. First allow dynamic switching between different book processing behaviors (Add vs View)
2. Handle books differently based on user-selected modes without changing core system logic
3. Maintain clean separation between different book processing algorithms
4. Enable easy addition of new processing strategies in the future

#### The pattern structure

Strategy Interface

```typescript
Interface BookOperationStrategy
    Method execute(book: Book) returns string
```

Concrete Strategies

```typescript
Class AddBookStrategy implements BookOperationStrategy
    Method execute(book)
        Log "Adding book"
        Return formatted book details with "Added" prefix

Class BookDetailsStrategy implements BookOperationStrategy
    Method execute(book)
        Log "Retrieving details"
        Return formatted book details
```

Context (Facade)

```typescript
Class BookManagementFacade
    Private strategy
    Private bookSystem

    Method setStrategy(newStrategy)
        Set strategy to newStrategy

    Method getBookDetails(bookId)
        Get book from bookSystem
        If strategy exists
            Return strategy.execute(book)
        Else
            Return default book details
```

Clietn Usage

```typescript
Class BookManagementPage
    Private isAddMode = false
    Private bookDetails = empty array

    Method handleFetchBook(bookId)
        If isAddMode
            Create new AddBookStrategy
        Else
            Create new BookDetailsStrategy

        Set facade's strategy
        Get book details using facade
        Add results to bookDetails array

    Method toggleMode()
        Switch isAddMode between true/false
```

### Results/Screenshots/Conclusions

The Strategy pattern allows the application to dynamically change its behavior based on user interaction, while maintaining clean and maintainable code structure.

![Alt text](./public/image2.png)

### References

1. https://sourcemaking.com/design_patterns/bridge
2. https://refactoring.guru/design-patterns/adapter
3. Else lecture
