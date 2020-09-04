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
// const name_comsumer = prompt(`What is your name?`);
// alert(`Hi ${name_comsumer}, welcome to our shop!`);
// let keyWord = prompt(`Please enter: C, R, U, D or X(to escape.)`);
// let currentItems = ['Jacket', 'Pillow', 'Shoes'];
// while(keyWord !== 'X'){
//     switch(keyWord){
//         case 'X':
//             break;
//         case 'C':
//             currentItems.push(prompt(`Enter the name of new item`));
//             keyWord = prompt(`Please enter: C, R, U, D or X(to escape.)`);
//             break;
//         case 'R':
//             console.log('The current items are: ');
//             for(let i = 0; i < currentItems.length; i++) {
//                 console.log(`${i+1}. ${currentItems[i]} `);
//             }
//             keyWord = prompt(`Please enter: C, R, U, D or X(to escape.)`);
//             break;
//         case 'U':
//             let update_pos = Number(prompt(`Enter the position you want to update`));
//             let updatedItem = prompt(`Enter the new name`);
//             currentItems[update_pos - 1] = updatedItem;
//             keyWord = prompt(`Please enter: C, R, U, D or X(to escape.)`);
//             break;
//         case 'D':
//             let delete_pos = Number(prompt(`Enter the position you want to delete`));
//             currentItems.splice(delete_pos - 1, 1);
//             alert(`Done!`);
//             keyWord = prompt(`Please enter: C, R, U, D or X(to escape.)`);
//             break;
//         default:
//             alert('This command is not supported!');
//             keyWord = prompt(`Please enter: C, R, U, D or X(to escape) again.`);
//     }
// }

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
    let smallestNumber = number_string[0];
    for(let i = 1; i < number_string.length; i++){
        if(number_string[i] < smallestNumber) {
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