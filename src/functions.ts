/* eslint-disable no-redeclare */
import {Book, BookOrUndefined, BookProperties, Callback, ILibrary, TOptions} from './interfaces';
import {Category} from './enums';
import RefBook from './classes/encyclopedia';

function getAllBooks(): readonly Book[] {
    const books: readonly Book[] = <const>[
        { id: 1, title: 'Refactoring JavaScript', author: 'Evan Burchard', available: true, category: Category.Angular},
        { id: 2, title: 'JavaScript Testing', author: 'Liang Yuxian Eugene', available: false, category: Category.TypeScript },
        { id: 3, title: 'CSS Secrets', author: 'Lea Verou', available: true, category: Category.TypeScript },
        { id: 4, title: 'Mastering JavaScript Object-Oriented Programming', author: 'Andrea Chiarelli', available: true, category: Category.Angular }
    ];
    return books;
}

function logFirstAvailable(books: readonly Book[] = getAllBooks()): void {
    console.log(`Length = ${books.length}`);
    console.log(books.find((book: Book) => book.available)?.title);
}

function getBookTitlesByCategory(category: Category = Category.TypeScript): Array<string> {
    return getAllBooks().filter((book: Book) => book.category === category).map(({ title }) => title);
}

function logBookTitles(titles: Array<string>): void {
    titles.forEach((title: string) => console.log(title));
}

function getBookAuthorByIndex(index: number = 0): [title: string, author: string] {
    const { title, author } = (getAllBooks() || [])[index];
    return [title ?? 'N/A', author ?? 'N/A'];
}

function calcTotalPages(): bigint {
    const libraries: readonly ILibrary[] = <const>[
        { lib: 'libName1', books: 1_000_000_000n, avgPagesPerBook: 250 },
        { lib: 'libName2', books: 5_000_000_000n, avgPagesPerBook: 300 },
        { lib: 'libName3', books: 3_000_000_000n, avgPagesPerBook: 280 },
    ];
    return libraries.reduce((acc, library) => acc + library.books * BigInt(library.avgPagesPerBook), 0n);
}

function createCustomerID(name: string, id: number): string {
    return `${name}/${id}`;
}

function createCustomer(name: string, age?: number, city?: string ): void {
    console.log(`Customer name: ${name}`);
    if (age) console.log(`Customer age: ${age}`);
    if (city) console.log(`Customer city: ${city}`);
}

export function getBookByID(id: Book['id']): BookOrUndefined {
    const books = getAllBooks();
    return books.find(book => book.id === id);
}

export function checkoutBooks(customer: string, ...booksId: number[]): string[] {
    console.log(`Customer: ${customer}`);

    return booksId.map(id => getBookByID(id)).filter(book => book.available).map(({ title }) => title);
}

function getTitles(author: string): string[];
function getTitles(available: boolean): string[];
function getTitles(id: number, available: boolean): string[];
function getTitles(...args: [string | boolean] | [number, boolean]): string[] {
    const books = getAllBooks();

    if(args.length === 1) {
        const [arg] = args;

        if (typeof arg === 'string') {
            return books.filter(book => book.author === arg).map(({ title }) => title);
        } else if (typeof arg === 'boolean'){
            return books.filter(book => book.available === arg).map(({ title }) => title);
        }
    } else if (args.length === 2) {
        const [id, available] = args;

        if (typeof id === 'number' && typeof available === 'boolean') {
            return books.filter(book => book.id === id && book.available === available).map(({ title }) => title);
        }
    }
    return [];
}

export function assertStringValue(value: any): asserts value is string {
    if (typeof value !== 'string') {
        throw new Error('error');
    }
}

export function bookTitleTransform (title: any) {
    assertStringValue(title);

    return [...title].reverse().join('');
}

export function printBook(book: Book): void {
    console.log(`${book.title} by ${book.author}`);
}

export function getProperty(book: Book, prop: BookProperties): any {
    const val = book[prop];
    return typeof val === 'function' ? val.name : val;
}

export function getObjectProperty<TObject, TKey extends keyof TObject>(object: TObject, prop: TKey): TObject[TKey] | string {
    const val = object[prop];
    return typeof val === 'function' ? val.name : val;
}

export function setDefaultConfig(options: TOptions): TOptions {
    options.duration ??= 100;
    options.speed ??= 90;
    return options;
}

export function assertRefBookInstance(condition: any): asserts condition {
    if(!condition) {
        throw new Error('It is not an instance of RefBook');
    }
}

export function printRefBook(data: any): void {
    assertRefBookInstance(data instanceof RefBook);
    data.printItem();
}

export function purge<T>(inventory: Array<T>): Array<T> {
    return inventory.slice(2);
}

export function getBooksByCategory(category: Category, callback: Callback<string[]>) {
    setTimeout(() => {
        try{
            const titles = getBookTitlesByCategory(category);

            if(titles.length > 0) {
                callback(null, titles);
            } else {
                throw new Error('No books found');
            }
        } catch (err) {
            callback(err, null);
        }
    }, 2000);
}

export function logCategorySearch(err: Error | null, titles: string[] | null): void {
    if (err) {
        console.log(err.message);
    } else {
        console.log(titles);
    }
}

export function getBooksByCategoryPromise(category: Category): Promise<string[]> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const titles = getBookTitlesByCategory(category);

            if(titles.length > 0) {
                resolve(titles);
            } else {
                reject('No books found');
            }
        }, 2000);
    });
}

export async function logSearchResults(category: Category): Promise<string[]> {
    const books = await getBooksByCategoryPromise(category);
    console.log(books);
    return books;
}

export {
    getTitles,
    createCustomer,
    createCustomerID,
    calcTotalPages,
    logFirstAvailable,
    getAllBooks,
    logBookTitles,
    getBookTitlesByCategory,
    getBookAuthorByIndex,
};