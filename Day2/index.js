// 3a
for(let i = 0; i < 7; i++) {
  console.log(i);
}

// 3b
let n = prompt('Enter a number?');
for(let i = 0; i < n; i++) {
  console.log(i);
}

// 3c
n = prompt('Enter n');
for(let i = 3; i < n; i++) {
  console.log(i);
}

//3d
n = prompt('Enter n');
let c = prompt('Enter c');
for(let i = c; i < n; i++) {
  console.log(i);
}

// 3e
n = prompt('Enter n');
c = prompt('Enter c');
for(let i = c; i < n; i+=3) {
  console.log(i);
}

// 3f
n = prompt('Enter n');
c = prompt('Enter c');
let s = prompt('Enter s');
for(let i = c; i < n; i+=s) {
  console.log(i);
}

// 4
let sum = 1;
n = prompt('Enter n: (n > 0)');
for(let i = 1; i <= n; i++) {
  sum *= i;
}
confirm('The factorial of' + n + 'is' + sum);

//5

let age_user = prompt('How old are you?');
if(age_user > 14) {
  alert('Enjoy.');
}
else {
  alert('You are not enough to view this content.');
}

//6

let x_value = prompt('Enter a number');
if(x_value < 5) {
  confirm('Lower half of 9');
}
else {
  confirm('Higher half of 9');
}

//7

let n_value = prompt('n = ');
x_value = prompt('x = ');
if(x_value < n_value / 2) {
  confirm(x_value + ' is in lower half of ' + n_value);
}
else {
  confirm(x_value + ' is in higher half of ' + n_value);
}

//8

x_value = prompt('x = ');
if(x_value % 2) {
  confirm( x_value + ' is an odd number');
}
else {
  confirm(x_value + ' is an even number');
}

//9a

for(let i = 0; i < 3; i++) {
  console.log('L');
}
for(let i = 0; i < 3; i++) {
    console.log('H');
}

//9b
n = prompt("Enter a total number of L's and H's");

for(let i = 0; i < n/2; i++) {
  console.log('L');
}
for(let i = n/2; i < n; i++) {
    console.log('H');
}

//9c
for(let i = 0; i < 4; i++) {
  console.log(0);
  console.log(1);
}

//9d
n = prompt("Enter a total number of 0's and 1's");
for(let i = 0; i < n/2; i++) {
  console.log(0);
  if(++i < n) {
    console.log(1);
  }
}

//10

// let user_weight = prompt("Your weight in kg?");
// let user_height = prompt("Your height in cm?");
// let BMI = user_weight/(user_height*user_height);
// confirm("Your BMI is " + BMI);
// switch(BMI){
//   case BMI < 16 :
//   alert("You are severely underweight");
//   break;
//   case BMI < 18.5:
//     alert("You are underweight");
//     break;
//   case BMI < 25:
//     alert("You are normal");
//     break;
//   case BMI < 30:
//     alert("You are overweight");
//     break;
//   default:
//     alert("You are Obese");
// }

//11