/* eslint-disable no-redeclare */

// showHello('greeting', 'TypeScript');
//
// function showHello(divName: string, name: string) {
//     const elt = document.getElementById(divName);
//     elt.innerText = `Hello from ${name}`;
// }

// ===================================================

import {Category} from './enums';
import {BookRequiredFields, UpdatedBook, СreateCustomerFunctionType} from './types';
import {UniversityLibrarian} from './classes/universityLibrarian';
import Encyclopedia from './classes/encyclopedia';
import {RefBook} from './classes';

// const ref = new ReferenceItem('Learn TypeScript', 2022, 1);
// ref.printItem();
// ref.publisher = 'abc';
// console.log(ref.publisher);
// console.log(ref.getId);



// Task 02.01. Basic Types
// logFirstAvailable(getAllBooks());
// logBookTitles(getBookTitlesByCategory(Category.Angular));
// console.log(getBookAuthorByIndex(1));
// console.log(calcTotalPages());

// Task 03.01. Function Type
// console.log(createCustomerID('Ann', 21));
// let idGenerator: (name: string, id: number) => string;
// idGenerator = createCustomerID;
// console.log(idGenerator('Ann', 21));

// Task 03.02. Optional, Default and Rest Parameters
// console.log(createCustomer('Ann'));
// console.log(getBookTitlesByCategory());
// console.log(logFirstAvailable());
// console.log(getBookByID(1));
// console.log(checkoutBooks('Ann', 1, 2, 3));

// Task 03.03. Function Overloading
// console.log(getTitles('Evan Burchard'));
// console.log(getTitles(false));

// Task 03.04. Assertion Functions
// console.log(bookTitleTransform('some title'));

// Task 04.01. Defining an Interface
// const myBook: Book = {
//     id: 5,
//     title: 'Colors, Backgrounds, and Gradients',
//     author: 'Eric A. Meyer',
//     available: true,
//     category: Category.CSS,
//     // year: 2015,
//     // copies: 3
//     pages: 200,
//     markDamaged: (reason: string) => {
//         console.log(`Damaged: ${reason}`);
//     }
// };
// printBook(myBook);
// myBook.markDamaged('missing back cover');

// Task 04.02. Defining an Interface for Function Types
// const logDamage: Logger = (reason: string) => {
//     console.log(`Damaged: ${reason}`);
// };
// logDamage('missing back cover');

// Task 04.03. Extending Interface
// const favoriteAuthor: Author = {
//     name: 'Vasya',
//     email: '1@1.ua',
//     numBooksPublished: 1
// };
// const favoriteLibrarian: Librarian = {
//     name: 'Vasya',
//     email: '1@1.ua',
//     department: 'some',
//     assistCustomer: (custName: string, bookTitle: string) => {}
// };

// Task 04.04. Optional Chaining
// const offer: any = {
//     book: {
//         title: 'Essential TypeScript',
//     },
// };
// console.log(offer.magazine);
// console.log(offer.magazine?.getTitle());
// console.log(offer.book.getTitle?.());
// console.log(offer.book.authors?.[0]);

// Task 04.05. Keyof Operator
// console.log(getProperty(getAllBooks()[0], 'title'));
// console.log(getProperty(getAllBooks()[0], 'markDamaged'));
// console.log(getProperty(getAllBooks()[0], 'isbn'));

// Task 05.01. Creating and Using Classes | Task 05.03. Creating Abstract Classes
// const enc = new RefBook('Learn TypeScript', 2022, 1, '123');
// console.log(enc);
// const refBook = new RefBook('Learn TypeScript', 2022, 1, '123');
// refBook.printItem();
// refBook.printCitation();

// Task 05.04. Interfaces for Class Types
// const favoriteLibrarian = new UL('asd', 'ads@asd.ua', 'asd');
// favoriteLibrarian.name = 'Anna';
// favoriteLibrarian.assistCustomer('aaa', 'bbb');

// Task 05.05. Intersection and Union Types
// const book: PersonBook = {
//     name: 'Anna',
//     email: '1@1.ua',
//     id: 1,
//     title: 'Learn TypeScript',
//     author: 'Boris',
//     available: true,
//     category: Category.Angular
// };
// console.log(book);

// Task 06.03. Default Export
// const book = new RefBook('Learn TypeScript', 2022, 1, '123');
// printRefBook(book);
//
// const ul = new UL('asd', 'ads@asd.ua', 'asd');
// printRefBook(ul);

// Task 06.05. Dynamic Import Expression
// const flag = true;
//
// if(flag) {
// import('./classes')
//     .then(m => {
//         const reader = new m.Reader();
//         console.log(reader);
//     })
//     .catch(err => logBookTitles(err));
//     const m = await import('./classes');
//     console.log(m);
// }

// Task 06.06. Type-Only Imports and Exports
// const lib: Library = new Library();
// const lib: Library = {
//     id: 1,
//     name: 'asd',
//     address: 'qwe'
// };

// Task 07.01. Generic Functions
// const inventory: Book[] = [
//     { id: 10, title: 'The C Programming Language', author: 'K & R', available: true, category: Category.Software },
//     { id: 11, title: 'Code Complete', author: 'Steve McConnell', available: true, category: Category.Software },
//     { id: 12, title: '8-Bit Graphics with Cobol', author: 'A. B.', available: true, category: Category.Software },
//     { id: 13, title: 'Cool autoexec.bat Scripts!', author: 'C. D.', available: true, category: Category.Software }
// ];
//
// const r = purge(inventory);
// console.log(r);
// const r2 = purge([1,2,3,4]);
// console.log(r2);

// Task 07.02. Generic Interfaces and Classes
// const bookShelf: Shelf<Book> = new Shelf();
// inventory.forEach(book => bookShelf.add(book));
// console.log(bookShelf.getFirst().title);
//
// const magazines: Magazine[] = [
//     { title: 'Programming Language Monthly', publisher: 'Code Mags' },
//     { title: 'Literary Fiction Quarterly', publisher: 'College Press' },
//     { title: 'Five Points', publisher: 'GSU' }
// ];
// const magazineShelf = new Shelf<Magazine>();
// magazines.forEach(mag => magazineShelf.add(mag));
// console.log(magazineShelf.getFirst().title);

// Task 07.03. Generic Constraints
// magazineShelf.printTitles();
// console.log(magazineShelf.find('Five Points'));
// console.log(getObjectProperty(magazines[0], 'publisher'));
// console.log(getObjectProperty(getAllBooks()[0], 'author'));

// Task 07.04. Utility Types
// const bookRequiredFields: BookRequiredFields = {
//     id: 1,
//     title: 'some title',
//     author: 'some author',
//     category: Category.Angular,
//     available: true,
//     pages: 500,
//     markDamaged: null
// };
//
// const updatedBook: UpdatedBook = {};
// const parameters: Parameters<СreateCustomerFunctionType> = ['aaa', 123, 'bbb'];
// createCustomer(...parameters);

// Task 07.05. Mapped Types, Utility Types, Conditional Types

// Task 08.01. Class Decorators (sealed)
// const o = new UniversityLibrarian('asd', 'ads@asd.ua', 'asd');
// // UniversityLibrarian['aaa'] = '111';
// // UniversityLibrarian.prototype['bbb'] = '111';
// o['bbb'] = 333;
// console.log(o);

// Task 08.02. Class Decorators that replace constructor functions (logger)
// const o = new UniversityLibrarian();
// console.log(o);
// o.name = 'anna';
// o['printLibrarian']();

// Task 08.03. Method Decorator (writable)
// const o = new UniversityLibrarian();
// o.assistFaculty = null;
// o.teachCommunity = null;
// console.log(o);

// Task 08.04. Method Decorator (timeout)
// const refBook = new RefBook('Learn TypeScript', 2022, 1, '123');
// refBook.printItem();

// Task 08.05. Parameter Decorator (logParameter) \ Task 08.06. Property Decorator
// const o = new UniversityLibrarian();
// o.name = 'Boris';
// o.assistCustomer('Anna', 'Learn smb');
// console.log(o);

// Task 08.07. Accessor Decorator
const refBook = new RefBook('Learn TypeScript', 2022, 1, '123');
refBook.copies = 10.5;

// Task 09.01. Callback Functions
// console.log('Begin');
// getBooksByCategory(Category.Angular, logCategorySearch);
// getBooksByCategory(Category.Software, logCategorySearch);
// console.log('End');

// Task 09.02. Promises
// console.log('Begin');
// getBooksByCategoryPromise(Category.Angular)
//     .then((titles: string[]) => {
//         console.log(titles);
//         return Promise.resolve(titles.length);
//     })
//     .then((length: number) => console.log(length))
//     .catch(err => console.log(err));
// getBooksByCategoryPromise(Category.Software)
//     .then((titles: string[]) => console.log(titles))
//     .catch(err => console.log(err));
// console.log('End');

// Task 09.03. Async Functions
// console.log('Begin');
// logSearchResults(Category.Angular).catch(err => console.log(err));
// console.log('End');

