import {Librarian} from '../interfaces';
import {format, logger, logMethod, logParameter, sealed, writable} from '../decorators';

// @sealed('UniversityLibrarian')
// @logger
export class UniversityLibrarian implements Librarian {
    // constructor(public department: string, public email: string, public name: string) {}
    @format() name: string;
    email: string;
    department: string;

    p: string;
    a: number;

    // @logMethod
    assistCustomer(@logParameter custName: string, @logParameter bookTitle: string): void {
        console.log(`${this.name} is assisting ${custName} with the book ${bookTitle}`);
    }

    // @writable(true)
    assistFaculty(): void {
        console.log('Assisting faculty');
    }

    // @writable(false)
    teachCommunity() {
        console.log('Teaching community');
    }
}

