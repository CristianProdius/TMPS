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

## Introduction/Motivation

In laboratory number 2 the focus was put on Structural Design Patterns. I have extended my privios word in order to make a system that is more flexible, maintanable and scalable to the new requierements.
In this raport I will start by first explianing the theroy behind the patterns that have been implemented, falowed by a detailed description of them and how they work. Also i will presetn UML diagrams and snip code for a better understanding of the project. Also the frontend can be acces live here :

### Theory

Structural design patterns have the task to compose clasees and objects into complex stuctures. They are divided into 2 groups, on one hand you have stuctural class patterns that use inherintance and on the other hand you have structural object pattersn that are using compositon. So as the structural design patterns are the following:

1. adapter
2. bridge
3. composite
4. decorator
5. facade
6. flyweight
7. proxy

Each one on of have one concern and here is the explanation for them:

#### Adapter

Is a structural design patterns that allow objects with incompatible interface to collaborate. Meaning that if we want to use a component/library in our project but they are not compatible with the current artihecture. The Adapter pattern allows us to make them work toghether bu converting the interface of one class into the interface that the client expects.

#### Bridge

The Bridge pattern splits a large class or closely related calsses into two separated hierarchied that can be developed indeplendently, those are abstraction and implementation.

#### Composite

The composite patterns it allows to compose objects into tree scructures. And wich each structure you are able to work with it as like it were and individual object.

#### Decorator

Decorator lets you attach new behaviors to objects by placing them inside special wrapper objects that contain these behaviors. As an example is a gift and you can wrap in into paper multiple times. Now each time you addi a new layer (functionality) you dont change what's inside.

#### Facade

This ones it provides a simple interface that represent multiple componenets, also its wraps a compley sub sytems with a simple abstraction. Example is the front desk of the hotel, the front desk wrap complex systems of that hotel into a simple interface (the forntdesk) which you as a user can interact.

#### Flyweight

A structural pattern that lets you fit more objects into available RAM by sharing common parts of state between multiple objects. Instead of storing the same data in multiple objects, it keeps the data in a few shared objects and links to them.

#### Proxy

Proxy the last pattern it provides a substitute for another object to control access to it. It acts like a protective wrapper that controls access to the real object - similar to how a credit card (proxy) represents your bank account (real object), controlling and managing access to your money.

### Motivation

The motivation for thsi project was to learn about stuctural patterns to implement them in an existing and simple project. Then to apply the knowlendge that i got form this lab into my project thar are deployed for the market. This will allow me to write better code and to be more flexible and alos easier to scale in the future. Thats why the main patterns that have been use in this lab are adapter facade and decorator.

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

### 1. Adapter Pattern

The code for it can be found here: `src/patterns/adapter/BookSystemAdapter.ts`

The Adapter pattern allows incompatible interfaces to work together. In my case, i had 2 different ways of handling book informatin.

1st. is the old legasy sytem which stores book information as simple strings and has seperate methods for differetn pieces of imformation

```typescript
LegacySystem:
    getBookInfo(id) → returns "Book 1: Harry Potter by J.K. Rowling"
    getBookYear(id) → returns 1997
```

2nd. is the nex system which it needst stuctured book objects and it requieres specific format for displaying book details

```typescript
ModernBookSystem:
    Book has: title, author, year
    needs: getDetails() → returns formatted information
```

Now the problem is that this 2 systems can not comunicate directly becouse of diferent data formats (one has strings other objects), different methods names and different ways of organizing information.
Here is how the adapter pattern oslved this problem:

```typescript
BookAdapter:
    FUNCTION fetchBook(id):
        // Get raw data from legacy system
        rawInfo = legacySystem.getBookInfo(id)
        year = legacySystem.getBookYear(id)

        // Convert string to structured data
        title, author = parseBookInfo(rawInfo)

        // Create new book object in format needed by modern system
        return new Book(title, author, year)
```

SO by using this pattersn we got numerous benefits. First was the integration, now the client code dosent neet to know about the legacy system, also the legacy sytems remained unchanged and both of them can comunicate.
Also not the code becomed easier to meinaint:

```typescript
Client: adapter = new BookAdapter(legacySystem);
book = adapter.fetchBook(1);
// Client gets a proper Book object without knowing about conversion
```

And is more flexible, the adapter can easely be modified to handle differend data sources and we can add new functionaliies without changing existing code

### 2. Decorator Pattern

Location: src/patterns/decorator/AudioBookDecorator.ts

I needed to add audio functionality to books in my system. Here's how I approached it by implementinf decoratoer pattern:
The probles was that I had a basic book system but needed to:

1. Add audio features to some books
2. Keep my original Book class clean
3. Allow for future feature additions
4. Avoid creating multiple book subclasses

Initialy the book classes looked like this :

```typescript
Book:
    what I had:
        title
        author
        year

    methods I had:
        getDetails() → "Title by Author (Year)"
```

Now i used the decorator in order to modify the original book class, to use different combination of featurres, i wanted to add features dynamically. So i implemented the decoratpr pattern here is how:

```typescript
// I started with my base Book class
Book:
    getDetails() → basic book info

// I created my AudioBook decorator
AudioBookDecorator:
    what I wrapped: Book object
    what I added:
        duration
        narrator

    how I implemented it:
        constructor(book, duration):
            store the book
            add audio duration

        getDetails() → keep original method

        getAudioDescription() →
            add "Audio version of [book details]"
```

Now this pattern helped me add new functionality to my books without breaking existing code or creating a complex inheritance hierarchy. I could wrap my books with new features whenever I needed them.

### 3. Facade Pattern

Location: src/patterns/facade/BookManagementFacade.ts
The Facade pattern provides a simplified interface to a complex subsystem. I had a complex book management system with multiple components that I needed to simplify. In my case it needed to work with the book adapter, to handle the audobookj decorator to manage the error logging. So I implemented the Facade to hide all of thise complexities form the client code. Here is the solution

```typescript
BookManagementFacade:
    what I wrapped:
        bookAdapter
        audioDecorator
        logger

    what I provided:
        getBookDetails(id):
            // I handled all complexity inside
            1. Get book through adapter
            2. Create audio version if needed
            3. Handle errors
            4. Log operations
            5. Return simple result

        createAudioBook(bookInfo, duration):
            // I simplified creation process
            1. Create basic book
            2. Add audio features
            3. Log creation
            4. Return ready-to-use audio book
```

This pattern helped me hide all the complex interactions between different parts of my system. I provided a simple interface that made it easy to work with my book management system without needing to understand all its internal complexities.

### Results/Screenshots/Conclusions

The implementation of these structural design patterns has resulted in a more flexible and maintainable book management system. With each pattern having its role, as a recap here is what they did
The Adapter pattern allows us to integrate legacy systems seamlessly.
The Decorator pattern enables us to add new functionalities (like audio book features) without modifying existing code.
The Facade pattern simplifies the client's interaction with the complex subsystem.
Screenshot of the running application:

![Alt text](./public/image.png)

### Conclusions:

Structural design patterns allows to create scalable felxible and easy to mentain software. with each patters having its own role.
In my case by implementing these patterns, I've created a system that is robust and can easely be changed in the features.

### References

1. https://sourcemaking.com/design_patterns/bridge
2. https://refactoring.guru/design-patterns/adapter
3. Else lecture
