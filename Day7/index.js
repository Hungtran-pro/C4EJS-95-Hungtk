// // 1
// var container = document.getElementById("list");
// for (let i = 0; i < 3; i++) {
//   container.insertAdjacentHTML("beforebegin", `<li>${i}</li>`);
// }

// answer: 1 - d; 2 - b; 3 - c; 4 - a;s

//2
// let timerId= setInterval(() => alert('Hello'), 3000);

// setTimeout(() => { clearInterval(timerId); alert('Bye'); }, 6000);

//3
//3.1: Ans: NO;
//3.2: Ans: YES;

//4

// var content = document.getElementsByTagName("LI");
// console.log(content[1].innerHTML);
// console.log(`----------------------------`);
// for(let i = 0; i < content.length; i++){
//     console.log(content[i].innerHTML);
// }

//5

// var content = document.getElementsByClassName("singer");
// for(let i = 0; i < content.length; i++){
//     console.log(content[i].innerHTML);
// }
// console.log(content[1]);

//6
// content[1].remove();
// console.log('-------------------');
// for(let i = 0; i < content.length; i++){
//     console.log(content[i].innerHTML);
// }

//7

// document.getElementById("button1").addEventListener("click", (e) => {
//     console.log(e.target);
// });

// document.getElementById("button2").addEventListener("click", (e) => {
//     console.log(e.target);
// });

// document.getElementById("button1").addEventListener("keydown", (e) => {
//     console.log(e.key);
// });

// document.getElementById("button2").addEventListener("keydown", (e) => {
//     console.log(e.key);
// });

//8

// function wish(name) {
//     alert(`${name} wishes mlem mlem`);
// }

// wish("Tran Hung");

//9

// function wishUser(name, wish) {
//     alert(`${name} wished that ${wish}`);
// }

// const userName = prompt('Enter your name');
// const userWish = prompt('Enter your wish');

// wishUser(userName, userWish);

//10

// function wishUser(name, wish){
//     if(!wish){
//         alert(`There is no wish ${name} did`);
//     }
//     else{
//         alert(`${name} wished that ${wish}`);
//     }
// }

// const userName = prompt('Enter your name');
// const userWish = prompt('Enter your wish');

// wishUser(userName, userWish);

//11

// var nameInput = document.getElementById("input_name");
// const upperButton = document.getElementById("buttonUpper");
// upperButton.addEventListener("click", (e) => {
//     console.log(e.target);
//     console.log(nameInput);
//     nameInput = document.getElementById("input_name");
//     console.log(nameInput.value);
//     console.log(nameInput.value.toUpperCase())
// });

//12
var ItemsOnScreen = document.getElementById("List-Items");
let listItems = ["bag", "pen", "pencilCase"];
console.log(listItems);
console.log(ItemsOnScreen);
for(let i = 0; i < listItems.length; i++){
    ItemsOnScreen.innerHTML += `<li>${listItems[i]}</li>`;
}
console.log(ItemsOnScreen);
// const addButton = document.getElementById("buttonAdd");
// addButton.addEventListener("click", () => {
//     newItem = document.getElementById("nameItem");
//     newItem = newItem.value.toLowerCase();
//     if(listItems.indexOf(newItem) === -1){
//         listItems.push(newItem);
//         console.log(listItems);
//     }
//     else{
//         console.log(`${newItem} is existed`);
//     }
// });

// const item_list_ul = document.getElementById("ul_list_item");
// console.log(item_list_ul);