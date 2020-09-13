// const LISTOFWORDS = ['to', 'be', 'that', 'of', 'elon', 'to', 'this', 'now', 'back', 'cool', 'hey', 'love', 'of', 'life', 'that', 'rain', 'summer', 'color', 'now', 'of', 'hat', 'late', 'sorry', 'my', 'team'];
// const len = LISTOFWORDS.length;
// let check = [];
// for(let i = 0; i < len; i++) {
//     check[i] = 0;
// }
// for(let i = 0; i < len; i++) {
//     let count = 1;
//     if(check[i] === 0){
//         for(let j = i + 1; j < len; j++) {
//             if(LISTOFWORDS[i] === LISTOFWORDS[j]){
//                 check[j] = 1;
//                 count++;
//             }
//         }
//         console.log(`${LISTOFWORDS[i]}: ${count}`);
//         check[i] = 1;
//     }
// }

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