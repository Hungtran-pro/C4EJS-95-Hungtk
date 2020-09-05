//1
//swap [a,b] = [b,a];
let a_number = 5;
let b_number = 6;
[a_number, b_number] = [b_number, a_number];
console.log(a_number);
console.log(b_number);

// swap using temporary variable;
a_number = 5;
b_number = 6;
var temp = a_number;
    a_number = b_number;
    b_number = temp;
console.log(a_number);
console.log(b_number);

//2
const s_string = "Hello beauty there";
const s_array = s_string.split(" ");
console.log(s_array);

//3
const a_array = [ 0, 8, 1, 0, 2, 0, 0, 1];
console.log(...a_array);

//4
const name_comsumer = prompt(`What is your name?`);
alert(`Hi ${name_comsumer}, welcome to our shop!`);
let keyWord = prompt(`Please enter: C, R, U, D or X(to escape.)`);
let currentItems = ['Jacket', 'Pillow', 'Shoes'];
while(keyWord !== 'X'){
    switch(keyWord){
        case 'C':
            currentItems.push(prompt(`Enter the name of new item`));
            keyWord = prompt(`Please enter: C, R, U, D or X(to escape.)`);
            break;
        case 'R':
            console.log('The current items are: ');
            for(let i = 0; i < currentItems.length; i++) {
                console.log(`${i+1}. ${currentItems[i]} `);
            }
            keyWord = prompt(`Please enter: C, R, U, D or X(to escape.)`);
            break;
        case 'U':
            let update_pos = Number(prompt(`Enter the position you want to update`));
            let updatedItem = prompt(`Enter the new name`);
            currentItems[update_pos - 1] = updatedItem;
            keyWord = prompt(`Please enter: C, R, U, D or X(to escape.)`);
            break;
        case 'D':
            let delete_pos = Number(prompt(`Enter the position you want to delete`));
            currentItems.splice(delete_pos - 1, 1);
            alert(`Done!`);
            keyWord = prompt(`Please enter: C, R, U, D or X(to escape.)`);
            break;
        default:
            alert('This command is not supported!');
            keyWord = prompt(`Please enter: C, R, U, D or X(to escape) again.`);
    }
}

//5
let numberSequence = prompt(`Enter sequence of Number, separated by commas (,)`);
let number_string = numberSequence.split(',');
let sum = 0;
for(let i = 0; i < number_string.length; i++){
    sum += Number(number_string[i]);
}
confirm(`The sum of them is ${sum}`);

//6
numberSequence = prompt(`Enter sequence of Number, separated by ","`);
number_string = numberSequence.split(',');
if(number_string.length < 1) {
    alert(`Empty sequence!`);
}
else {
    let smallestNumber = Number(number_string[0]);
    for(let i = 1; i < number_string.length; i++){
        if(Number(number_string[i]) < smallestNumber) {
            [number_string[i], smallestNumber] = [smallestNumber, number_string[i]];
        }
    }
    confirm(`The smallest number is ${smallestNumber}`);
}

//7
const arr = [3, 4, 6, -9, 10, -88, 2];
let number = Number(prompt(`Enter a number`));
if(arr.indexOf(number) !== -1) {
    alert(`${number} is FOUND in my array at index ${arr.indexOf(number)}`);
}
else {
    alert(`${number} is NOT found in my array`);
}

//8
let size_string = prompt(`Enter your sheep sizes(separated by ' ')`);
let sheepSize = size_string.split(' ');
for(let i = 0; i < sheepSize.length; i++) {
    sheepSize[i] = Number(sheepSize[i]);
}
console.log(`Hello, my name is Tran Hung and here is my sheep sizes:`);
console.log(...sheepSize);
console.log(`Now my biggest sheep has size ${Math.max(...sheepSize)}, let's shave it.`);
sheepSize[sheepSize.indexOf(Math.max(...sheepSize))] = 8;
console.log(`After shearing, here is my flock`);
console.log(...sheepSize);
for(let i = 1; i <= 4; i++) {
    console.log(`MONTH ${i}`);
    console.log(`One month has, passed, my sheep have grown, here are their size:`);
    for(let j = 0; j < sheepSize.length; j++) {
        sheepSize[j] += 50;
    }
    console.log(...sheepSize);
    console.log(`Now my biggest sheep has size ${Math.max(...sheepSize)}, let's shave it.`);
    sheepSize[sheepSize.indexOf(Math.max(...sheepSize))] = 8;
    console.log(`After shearing, here is my flock`);
    console.log(...sheepSize);
}
let sum_flock = 0;
for(let i = 0; i < sheepSize.length; i++) {
    sum_flock += sheepSize[i];
}
console.log(`My flock has size in total: ${sum_flock}`);
console.log(`I would get ${sum_flock} * 2$ = ${sum_flock * 2}`);

//9
// const color_array = ["red", "gray", "blue", "purple", "cyan"];
// for(let i = 0; i < 5; i++) {
//   color(color_array[i]);
//   for(let j = 1; j <= 4; j++) {
//     fd(30+30*i);
//     rt(90);
//   }
// }

//10
const arrayOfName = prompt(`Enter a sequence of name:(separated by ",")`).split(',');

const result = arrayOfName.map(word => `<${word}>`);

alert(`${arrayOfName} => ${result}`);

//11
const arrayOfNumber = prompt(`Enter a sequence of number:(separated by ",")`).split(',');

const oddArray = arrayOfNumber.filter(x => x % 2 !== 0);

alert(`${arrayOfNumber} => ${oddArray}`);
