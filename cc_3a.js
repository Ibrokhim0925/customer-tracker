// Step 2: Create Customer Records
let Customers = [
    {
        name: "Kate Johnson", 
        email: "Jkate@example.com",
        purchases: ["Charger", "Iphone case",]
    }, 
    {
        name: "Lara Lee", 
        email: "Lare.Lee@example.com",
        purchases: ["Washer Combo", "Microwave", "TV"]
    },
    {
        name: "Liam Jolie", 
        email: "Jolie.Liam@example.com",
        purchases: ["Tier", "Rear Window", "Security Camera"]
    }
];

// Step 3: Add and Remove Data
Customers.push({ name: "John Smith", 
        email: "John.S@example.com",
        purchases: ["Glass Bottle", "Jeans", "Sneakers"]
}
);

let RemovedCustomer = Customers.shift();
console.log(customers); 

// Step 4: Update Customer Info
Customers[1].email = "Smith.John@example.com";
Customers[2].purchases.push("Window Wiper");

console.log(customers);

//  Step 5: Display Customer Information
Customers.forEach((customer) => {
    console.log(
        `Name: ${Customer.name}, Email: ${customer.email}, Purchases: ${customer.purchases.length}`
    );
});