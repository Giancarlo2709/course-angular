import { Product, taxCalculation, tax } from './06-function-destructuring';


const shoppingCart: Product[] = [
    {
        description: 'Nokia',
        price:100
    },
    {
        description: 'iPad',
        price: 150
    }
];

const [total, taxTotal] = taxCalculation({
    products: shoppingCart,
    tax, // tax: tax
});


console.log('Total: ', total);
console.log('Tax: ', taxTotal);