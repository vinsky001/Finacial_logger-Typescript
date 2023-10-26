import { hasFormatter } from "../Interfaces/hasFormatter"
// CLASS
export class Invoice implements hasFormatter {
    // all properties are public by default unless you change then to private
    //Initialise  values inside a constructor
    constructor(
        readonly client: string,
        private details: string,
        public amount: number,
    ){}
    //method of the class
    format() {
        return `${this.client} owes ${this.amount} for ${this.details}`;
    }
} 