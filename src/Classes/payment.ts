import { hasFormatter } from "../Interfaces/hasFormatter"
// CLASS
export class Payment implements hasFormatter {
    // all properties are public by default unless you change then to private
    //Initialise  values inside a constructor
    constructor(
        readonly recipient : string,
        private details: string,
        public amount: number,
    ){}
    //method of the class
    format() {
        return `${this.recipient} is  owed ${this.amount} for ${this.details}`;
    }
} 