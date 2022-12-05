import {ReferenceItem} from '../classes';
import {positiveInteger} from '../decorators';

export default class Encyclopedia extends ReferenceItem {
    private _copies: number;

    get copies(): number {
        // eslint-disable-next-line no-underscore-dangle
        return this._copies;
    }

    @positiveInteger
    set copies(value: number) {
        // eslint-disable-next-line no-underscore-dangle
        this._copies = value;
    }

    constructor(
        id,
        title,
        year,
        public edition: string
    ) {
        super(id, title, year);
    }

    override printItem() {
        super.printItem();
        console.log(`Edition: ${this.edition} ${this.year}`);
    }

    printCitation(): void {
        console.log(`${this.title} – ${this.year}`);
    }
}