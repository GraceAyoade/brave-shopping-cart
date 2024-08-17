
// Define the Items:

// Create an array of objects representing items in the shopping cart. Each object should have the following properties:
// name (string)
// price (number)
// quantity (number)
const cart = [
    {name: "Bags", price: 50, quantity: 3}, 
    {name: "Shoes", price: 40, quantity: 2}, 
    {name: "Watch", price: 25, quantity: 4},
]

// Calculate Subtotal:
// Write a function calculateSubtotal that takes the array of items as an argument and returns the subtotal (sum of the price of each item multiplied by its quantity).
function calculateSubtotal (arrayOfItems) {
    let subTotal = 0
    for (i=0; i <= arrayOfItems.length-1; i++) {
        subTotal = subTotal + arrayOfItems[i].price * arrayOfItems[i].quantity;
    }
    return subTotal
}

// Apply Discount:
// Write a function applyDiscount that takes the subtotal and a discount percentage as arguments. 
// It should return the subtotal after applying the discount.
function applyDiscount ( subTotal, discount){
    return subTotal - discount/100 * subTotal
}

// Calculate Tax:
// Write a function calculateTax that takes the discounted total and a tax rate as arguments. 
// It should return the total after applying tax.
function calculateTax (discountedTotal, taxRate) {
    return discountedTotal + taxRate/100 * discountedTotal
}

// Calculate Final Total:
// Write a function calculateTotal that combines the previous functions to calculate the final total cost 
// of the shopping cart.
function calculateTotal (cartItems, discount, taxRate){
    let subTotal = calculateSubtotal(cartItems)
    let discountedTotal = applyDiscount(subTotal, discount)
    let taxedTotal = calculateTax(discountedTotal, taxRate)
    return taxedTotal
}

// Test the Functions:
console.log(calculateTotal(cart, 10, 5));


// Test your code with different items, discounts, and tax rates to verify that your functions work correctly.