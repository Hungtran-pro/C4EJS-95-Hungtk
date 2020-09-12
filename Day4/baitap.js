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

//5
// let productInfo = [
//     {
//         name: 'Xiaomi portable charger 20000mah',
//         brand: 'Xiaomi',
//         price: 428,
//         color: 'White',
//         category: 'Charger',
//     },
//     {
//         name: 'VSmart Active 1',
//         brand: 'VSmart',
//         price: 5487,
//         color: 'Black',
//         category: 'Phone',
//     },
//     {
//         name: 'IPhone X',
//         brand: 'Apple',
//         price: 21490,
//         color: 'Gray',
//         category: 'Phone',
//     },
//     {
//         name: 'Samsung Galaxy A9',
//         brand: 'Samsung',
//         price: 8490,
//         color: 'Blue',
//         category: 'Phone',
//     }
// ];
// let len = productInfo.length;
// //5.1
// for(let i = 0; i < len; i++){
//     console.log(`Name: ${productInfo[i]["name"]}\nPrice: ${productInfo[i]["price"]}`);
//     console.log(`--------------------------------------`);
// }

// //5.2
// for(let i = 0; i < len; i++){
//     console.log(`#${i+1}. Name: ${productInfo[i]["name"]}\nPrice: ${productInfo[i]["price"]}`);
// }
// let inputNumber = Number(prompt("Enter product position:"));
// while(inputNumber < 1 || inputNumber > productInfo.length) {
//     inputNumber = prompt('Enter product position(again): ');
// }
// console.clear();
// let product = productInfo[inputNumber-1];
// for(const property in product)  {
//     console.log(`${property}: ${product[property]}`);
// }

// //5.3
// let check = true;
// let cateInput = prompt('Enter your category:').toLowerCase();
// for(let i = 0; i < len; i++) {
//     var {name, price, category} = productInfo[i];
//     if(cateInput === category.toLowerCase()){
//         check = false;
//         console.log(`Name: ${name}`);
//         console.log(`Price: ${price}`);
//         console.log('-----------------');
//     }
// }
// if(check === true) {
//     alert('The category is not exist');
// }

// console.clear();
// productInfo[0]["providers"] = ['phukienzero', 'dientuccc'];
// productInfo[1]["providers"] = ['tgdd', 'ddghn', 'vhstore'];
// productInfo[2]["providers"] = ['tgdd'];
// productInfo[3]["providers"] = ['tgdd'];

// for(let i = 0; i < len; i++){
//     product = productInfo[i];
//     console.log(`${product["name"]}`);
//     console.log(`Price: ${product["price"]}`);
//     console.log(`Providers: ${product["providers"]}`);
//     console.log("-------------------");
// }

// //5.5
// console.clear();
// check = true;
// let providerInput = prompt('Enter providers');
// for(let i = 0; i < len; i++) {
//     var {name, brand, price, category, providers} = productInfo[i];
//     for(let j = 0; j < providers.length; j++) {
//         if(providerInput.toLowerCase() === providers[j]) {
//             check = false;
//             for(let property in productInfo[i]){
//                 console.log(`${property}: ${productInfo[i][property]}`);
//             }
//             console.log('----------------');
//         }
//     }
// }
// if(check) {
//     alert(`Can NOT find your provider: ${providerInput}`);
// }

// //6
// let TASKS = [
//     {task: 'HTML', Complete: 'false'},
//     {task: 'CSS', Complete: 'false'},
//     {task: 'Basics of Javascript', Complete: 'false'},
//     {task: 'Node Package Manager (NPM)', Complete: 'false'},
//     {task: 'Git', Complete: 'false'}
// ];

// //6.1
// let L_TASKS = TASKS.length;
// for(let i = 0; i < L_TASKS; i++){
//     var {task, Complete} = TASKS[i];
//     console.log(`${i+1}. \t${task}`);
//     console.log(`\tComplete: ${Complete}`);
// }

// //6.2
// function print(){
//     L_TASKS = TASKS.length;
//     for(let i = 0; i < L_TASKS; i++){
//         var {task, Complete} = TASKS[i];
//         console.log(`${i+1}. \t${task}`);
//         console.log(`\tComplete: ${Complete}`);
//     }
    
// }

// let cInput = prompt('Enter your command(New, Delete, Update, Complete) or X(to escape)'); // cInput ~ commandInPut
// while(cInput.toLowerCase() !== 'x'){
//     switch(cInput.toLowerCase()) {
//         case 'new':
//             let newTask = prompt('Enter new task');
//             TASKS.push({task: newTask, Complete: false});
//             console.clear();
//             print();
//             cInput = prompt('Enter your command(New, Delete, Update, Complete) or X(to escape)');
//             break;
//         case 'delete':
//             let posDelete = Number(prompt('Enter deleted position:'));
//             TASKS.splice(posDelete-1, 1);
//             console.clear();
//             print();
//             cInput = prompt('Enter your command(New, Delete, Update, Complete) or X(to escape)');
//             break;
//         case 'update':
//             let updatePos = Number(prompt('Enter position:'));
//             let updateTittle = prompt('Enter new tittle');
//             TASKS[updatePos-1]["task"] = updateTittle;
//             console.clear();
//             print();
//             cInput = prompt('Enter your command(New, Delete, Update, Complete) or X(to escape)');
//             break;
//         case 'complete':
//             let completePos = Number(prompt('Enter position:'));
//             TASKS[completePos-1]["Complete"] = 'true';
//             console.clear();
//             print();
//             cInput = prompt('Enter your command(New, Delete, Update, Complete) or X(to escape)');
//             break;
//         default :
//         alert('your command is not available');
//         cInput = prompt('Enter your command(New, Delete, Update, Complete) or X(to escape)');
//     }
// }

// //7
// clear();
// const pos = {
// x: 200,
// y: 50,
// }
// rt(90);
// penup(fd(pos.x));
// lt(90);
// penup(fd(pos.y));

//8
// clear();
// const pos = {
// x: 200,
// y: 50,
// width: 20
// };
// penup();
// rt(90);
// fd(pos.x);
// lt(90);
// fd(pos.y);
// pendown();
// for(let i = 0; i < 4; i++){
//   rt(90);
//   fd(pos.width);
// }

//9
// clear();
// const pos = {
// x: 200,
// y: 50,
// width: 20,
// height: 50,
// };
// penup();
// rt(90);
// fd(pos.x);
// lt(90);
// fd(pos.y);
// pendown();
// for(let i = 0; i < 2; i++){
//   rt(90);
//   fd(pos.width);
//   rt(90);
//   fd(pos.height);
// }

//10
// clear();
// const cmds = [
//     {
//         shape: 'square',
//         x: 20,
//         y: 40,
//         width: 50,
//     },
//     {
//         shape: 'rect',
//         x: 8,
//         y: 70,
//         width: 12,
//         height: 40,
//     },
//     {
//         shape: 'rect',
//         x: 70,
//         y: 70,
//         width: 12,
//         height: 40,
//     },
//     {
//         shape: 'rect',
//         x: 10,
//         y: 20,
//         width: 70,
//         height: 20,
//     },
//     {
//         shape: 'square',
//         x: 25,
//         y: 40,
//         width: 14,
//     },
//     {
//         shape: 'square',
//         x: 33,
//         y: 42,
//         width: 6,
//     },
//     {
//         shape: 'square',
//         x: 50,
//         y: 40,
//         width: 14,
//     },
//     {
//         shape: 'square',
//         x: 58,
//         y: 42,
//         width: 6,
//     },
//     {
//         shape: 'square',
//         x: 40,
//         y: 25,
//         width: 8,
//     },
//     {
//         shape: 'square',
//         penWidth: 1,
//         x: 500,
//         y: 500,
//         width: 15,
//     },
// ];
// for(let i = 0; i < cmds.length; i++){
//   var {shape, x, y, width, height, radius} = cmds[i];
//   home();
//   if(shape === "square"){
//     penup();
//     rt(90);
//     fd(x);
//     lt(90);
//     fd(y);
//     pendown();
//     for(let i = 0; i < 4; i++){
//       fd(width);
//       rt(90);
//     }
//   }
//   else if{
//     penup();
//     rt(90);
//     fd(x);
//     lt(90);
//     fd(y);
//     pendown();
//     for(let i = 0; i < 2; i++){
//       fd(height);
//       rt(90);
//       fd(width);
//       rt(90);
//     }
//   }
//   else{
//     penup();
//     rt(90);
//     fd(x);
//     lt(90);
//     fd(y);
//     pendown();
//     for(let i = 0; i < 360; i++){
//         fd(radius/60);
//         rt(1);
//     }
//   }
// }

//11
// clear();
// const circle = {
// shape:'circle',
// x: 100,
// y: 50,
// radius: 30,
// };
// var {shape, x, y, radius} = circle;
// penup();
// rt(90);
// fd(x);
// lt(90);
// fd(y);
// pendown();
// for(let i = 0; i < 360; i++){
//   fd(radius/60);
//   rt(1);
// }

//12
// clear();
// const cmds = [
//     {
//         shape: 'circle',
//         x: 0,
//         y: -20,
//         radius: 60,
//     },
//     {
//         shape: 'circle',
//         x: 0,
//         y: 80,
//         radius: 40,
//     },
//     {
//         shape: 'circle',
//         x: -75,
//         y: 10,
//         radius: 20,
//     },
//       {
//         shape: 'circle',
//         x: 75,
//         y: 10,
//         radius: 20,
//     },
//     {
//         shape: 'square',
//         x: -65,
//         y: -100,
//         width: 30,
//     },
//       {
//         shape: 'square',
//         x: 38,
//         y: -100,
//         width: 30,
//     },
  
//   {
//         shape: 'rect',
//         x: -30,
//         y: 80,
//         width: 20,
//         height: 4
//     },
//     {
//         shape: 'rect',
//         x: 10,
//         y: 80,
//         width: 20,
//         height: 4
//     },
//       {
//         shape: 'rect',
//         x: -10,
//         y: 50,
//         width: 20,
//         height: 6
//     },
//   {
//         shape: 'square',
//         x: 500,
//         y: 500,
//         width: 20,
//     },
// ];

// for(let i = 0; i < cmds.length; i++){
//   var {shape, x, y, width, height, radius} = cmds[i];
//   home();
//   if(shape === "square"){
//     penup();
//     rt(90);
//     fd(x);
//     lt(90);
//     fd(y);
//     pendown();
//     for(let i = 0; i < 4; i++) {
//       fd(width);
//       rt(90);
//     }
//   }
//   else if(shape === "rect"){
//     penup();
//         rt(90);
//         fd(x);
//         lt(90);
//         fd(y);
//         pendown();
//         for (let i = 0; i < 2; i++) {
//           fd(height);
//           rt(90);
//           fd(width);
//           rt(90);
//         }
//   }
//   else{
//     penup();
//     rt(90);
//     fd(x);
//     lt(90);
//     fd(y);
//     pendown();
//     for(let i = 0; i < 360; i++){
//         fd(radius/60);
//         rt(1);
//     }
//   }

