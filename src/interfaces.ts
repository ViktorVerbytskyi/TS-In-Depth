import {Book, BookOrUndefined, BookProperties, PersonBook } from './types';

interface ILibrary {
    lib: string;
    books: bigint;
    avgPagesPerBook: number;
}

interface DamageLogger {
    (reason: string): void;
}

interface Person {
    name: string;
    email: string;
}

interface Author extends Person {
    numBooksPublished: number;
}

interface Librarian extends Person {
    department: string;
    assistCustomer: (custName: string, bookTitle: string) => void;
}

interface TOptions {
    duration?: number;
    speed?: number;
}

interface Magazine {
    title: string;
    publisher: string;
}

interface ShelfItem {
    title: string;
}

export interface LibMgrCallback {
    (err: Error | null, titles: string[] | null): void;
}

export interface Callback<T> {
    (err: Error | null, data: T | null): void;
}

export { ShelfItem, Magazine, DamageLogger, BookOrUndefined, PersonBook, BookProperties, Book, ILibrary, DamageLogger as Logger, Person, Author, Librarian, TOptions };