/*
//interface
interface isPerson {
    name: string;
    age: number;
    speak(a: string): void;
    spend(a: number): number;
}

const me: isPerson = {
    name: 'Elvis',
    age: 29,
    speak(text: 'Guten Tag'): void {
        console.log(text);
    },
    spend(amount: number): number {
        console.log( 'I spent', amount);
        return amount;
    }
};
*/
import { Payment} from "./Classes/payment.js";
import { Invoice } from "./Classes/invoice.js"
import { hasFormatter } from "./Interfaces/hasFormatter";
import { listTemplate } from "./Classes/listTemplate.js";
/*
let docOne: hasFormatter;
let docTwo: hasFormatter; 

docOne = new Invoice('Yosho', 'Delivery', 4500);
docTwo = new Payment('SantaMonica', 'salaryPA', 34000);

//Create an array which only implemants the hasformatter
let docs: hasFormatter[] = [];
docs.push(docOne);
docs.push(docTwo);

console.log(docs);

*/
//instaciate the class
const invOne = new Invoice('Kibet', 'Visa fees due', 17800);
const invTwo = new Invoice('Yoshi', 'Visa fees due', 17800);

let invoices: Invoice[] = [];
invoices.push(invOne);
invoices.push(invTwo);

// when using PRIVATE  propertity you cannot access the instance directly! Use .format 
invoices.forEach(inv => {
    console.log(inv.client, inv.amount)
})

//console.log(invOne, invTwo), i

//inputs
const form = document.querySelector('.new-item-form') as HTMLFormElement;

// We select the different elements we want to log/use
const type = document.querySelector('#type') as HTMLSelectElement;
const toFrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

//add event listner 
const ul = document.querySelector('ul');
const list = new listTemplate(ul);

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();

    let doc: hasFormatter;
    if (type.value === 'invoice'){
        doc = new Invoice(toFrom.value, details.value, amount.valueAsNumber)
    } else {
        doc = new Payment(toFrom.value, details.value, amount.valueAsNumber)
    }  
    list.render(doc, type.value, 'end');
    
    
});