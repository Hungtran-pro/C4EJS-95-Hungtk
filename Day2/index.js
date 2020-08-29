let a = prompt("Enter a number:");

for(let i = 1; i <= a ; i++ )  {
  console.log(i);
}

let password = prompt('Enter a password');
while( password.length <= 6 || password.length >= 20) {
  password = prompt('Rename?');
}
console.log(password);