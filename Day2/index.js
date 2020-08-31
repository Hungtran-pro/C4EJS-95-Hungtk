// 3a
for(let i = 0; i < 7; i++) {
  console.log(i);
}

// 3b
let n = prompt('Enter n:')
for(let i = 0; i < n; i++) {
  console.log(i);
}

// 3c
n = prompt('Enter n:')
for(let i = 3; i < n; i++) {
  console.log(i);
}

//3d
let c = prompt('Enter c:')
let n = prompt('Enter n:')
for(let i = c; i < n; i++) {
  console.log(i);
}

// 3e
let c = prompt('Enter c:')
let n = prompt('Enter n:')
for(let i = c; i < n; i+=3) {
  console.log(i);
}

// 3f
let s = prompt('Enter s:')
let c = prompt('Enter c:')
let n = prompt('Enter n:')
for(let i = c; i < n; i+=3) {
  console.log(i);
}

// 4
let sum = 0;
let n = prompt('Enter n:')
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
  alert('You are not enough to view this content.')
}

//6

let x_value = prompt('Enter a number');
if(x > 4) {
  confirm('Lower half of 9');
}
else {
  confirm('Higher half of 9');
}

//7

let n_value = prompt('n = ');
x_value = prompt('x = ');
if(x_value > n_value / 2) {
  confirm(x_value + 'is in lower half of' + n_value);
}
else {
  confirm(x_value + 'is in higher half of' + n_value);
}

//8

x_value = prompt('x = ');
if(x_value % 2) {
  confirm( x_value + 'is an odd number');
}
else {
  confirm(x_value + 'is an even number');
}

//9

for(let i = 0; i < 6; i++) {
  console('L');
  console('H');
}
// for(let i = 0; i < 6; i++) {
//     console('H');
// }
