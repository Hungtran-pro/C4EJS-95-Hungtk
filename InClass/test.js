const inventory = [
    {
        name: 'HP Envy 13aq',
    
        price: 21000,
    
        brand: 'HP',
    
        quantity: 5,
    
    },
    {
    
        name: 'Dell XPS 9370',
    
        price: 30000,
    
        brand: 'Dell',
    
        quantity: 1,
    
    },
    
    {
    
        name: 'Dell Inspiron 3567',
    
        price: 9300,
    
        brand: 'Dell',
    
        quantity: 12,
    
    },
    
    {
    
        name: 'Dell Latitude E5450',
    
        price: 8600,
    
        brand: 'Dell',
    
        quantity: 2,
    
    },
    
    {
    
        name: 'Asus Zenbook',
    
        brand: 'Asus',
    
        price: 20000,
    
        quantity: 4,
    
    },
    
    {
    
        name: 'HP Pavilion',
    
        brand: 'HP',
    
        price: 14000,
    
        quantity: 7,
    
    },
];
console.log(inventory);
let len = inventory.length;
let brandInput = prompt('Which brand:').toLowerCase();
let count = 0;
let brandC = []; 
for(let i = 0; i < len; i++) {
    if(inventory[i].brand.toLowerCase() === brandInput) {
        count++;
       brandC.push(inventory[i].name); 
    }
}
if(count !== 0) {
    confirm(`There are ${count} generations of '${brandInput}' in inventory ${brandC}`);
    
}
else {
    brandInput = prompt('Please enter your brand again!');
}