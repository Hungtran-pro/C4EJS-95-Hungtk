// //code by hunT
// //1

// const product = {
//     name: "Xiaomi rice cooker",
//     price: 1700,
//     brand: "Xiaomi",
//     color: "white"
// };
// for (let x in product) {
//     console.log(x);
// }

// for (let x in product) {
//     console.log(`${x}: ${product[x]}`);
// }

// //2
// const task = {
//     subject: "Implement login feature",
//     createdBy: "Hoang Ngoc Duc",
//     assignTo: "Nguyen Phuong Nam",
//     dueDate: "2019-10-08T18:00:24+0000",
//     expectedHours: 0.5,
// };
// var {subject, assignTo, dueDate} = task;
// //or

// var subject, country, dueDate;
// ({subject, country, dueDate} = task);
// console.log(subject);


// //4
// let objectUser = {
//     debug: 'The process of figuring out why your program has a certain error and how to fix it',
//     done: 'When your task is complete, the only thing you have to do is to wait for users to use it (no additional codes or actions needed)',
//     defeat: 'The formal word for error',
//     pm: 'The shoer version of Project Manager, the person in charge of the final result of a project',
//     uiux: 'UI means User Interface, UX means User Experience, are the process to define how your products look and feel'
// };

// alert('Hi there, this is dev dictionary.');
// let keyword = prompt('Enter a keyWord.');
// if(objectUser[keyword]) {
//     alert(`${keyword}\n${objectUser[keyword]}`);
// }
// else {
    // let newTerm = prompt(`We could NOT find "${keyword}", leave your explanation`);
    // while(!newTerm){
    // newTerm = prompt('Do not leave a blank, please enter your explanation again');
    // }
    // objectUser[keyword] = newTerm;
    // alert(`${keyword}\n${objectUser[keyword]}`);
//     alert('Done!');
// }
