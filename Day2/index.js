// 3a
for(let i = 0; i < 7; i++) {
  console.log(i);
}

// 3b
let n_number = prompt('Enter a number?')-0;
for(let i = 0; i < n_number; i++) {
  console.log(i);
}

// 3c
n_number = prompt('Enter n')-0;
for(let i = 3; i < n_number; i++) {
  console.log(i);
}

//3d
n_number = prompt('Enter n')-0;
let c_number = prompt('Enter c')-0;
for(let i = c_number; i < n_number; i++) {
  console.log(i);
}

// 3e
n_number = prompt('Enter n')-0;
c_number = prompt('Enter c')-0;
for(let i = c_number; i < n_number; i += 3) {
  console.log(i);
}

// 3f
n_number= prompt('Enter n')-0;
c_number = prompt('Enter c')-0;
let s_number = prompt('Enter s')-0;
for(let i = c_number; i < n_number; i += s_number) {
  console.log(i);
}

// 4
let sum = 1;
n_number = prompt('Enter n: (n > 0)')-0;
for(let i = 1; i <= n_number; i++) {
  sum *= i;
}
confirm('The factorial of ' + n_number + ' is ' + sum);

//5

let age_user = prompt('How old are you?')-0;
if(age_user > 14) {
  alert('Enjoy.');
}
else {
  alert('You are not enough to view this content.');
}

//6

let x_value = prompt('Enter a number')-0;
if(x_value < 4.5) {
  confirm('The number is lower half of 9');
}
else {
  confirm('The number is higher half of 9');
}

//7

let n_value = Number(prompt('n = '));
x_value = prompt('x = ');
if(x_value < n_value / 2) {
  confirm(x_value + ' is in lower half of ' + n_value);
}
else {
  confirm(x_value + ' is in higher half of ' + n_value);
}

//8

x_value = prompt('x = ')-0;
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
n_number = prompt("Enter a total number of L's and H's")-0;

for(let i = 0; i < Math.round(n_number/2); i++) {
  console.log('L');
}
for(let i = Math.round(n_number/2); i < n_number; i++) {
    console.log('H');
}

//9c
for(let i = 0; i < 4; i++) {
  console.log(0);
  console.log(1);
}

//9d
n_number = prompt("Enter a total number of 0's and 1's")-0;
for(let i = 0; i < n_number/2; i++) {
  console.log(0);
  if(++i < n_number) {
    console.log(1);
  }
}

//10

let user_weight = prompt("Your weight in kg?")-0;
let user_height = prompt("Your height in cm?")-0;
let BMI = user_weight/(user_height*user_height);
confirm("Your BMI is: " + BMI);
  if (BMI < 16)
  alert("You are severely underweight");
  else if (BMI < 18.5)
    alert("You are underweight");
  else if (BMI < 25)
    alert("You are normal");
  else if (BMI < 30)
    alert("You are overweight");
  else
    alert("You are Obese");


//11