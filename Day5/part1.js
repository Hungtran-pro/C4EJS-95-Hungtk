// //PART 1.1
// alert(Math.random().toFixed(2));


// //PART 1.2
// const ARRAY = [1, 2, 3, 4, 5, 6, 7, 8];
// alert(ARRAY[Math.floor(Math.random()*ARRAY.length)]);

//PART 1.3
const QUIZZES = [
    {
        Question: 'Who is the richest in the world?',
        A: 'The composer of this question',
        B: 'The writer of this question',
        C: 'The person who created this question',
        D: 'NOT you',
        Answer: 'A'
    },
    {
        Question: 'Who is the strongest in the world?',
        A: 'The composer of this question',
        B: 'The writer of this question',
        C: 'The person who created this question',
        D: 'NOT you',
        Answer: 'B'
    },
    {
        Question: 'Who is the fastest in the world?',
        A: 'The composer of this question',
        B: 'The writer of this question',
        C: 'The person who created this question',
        D: 'NOT you',
        Answer: 'C'
    },
]
const ANSWER = ['A', 'B', 'C', 'D', ''];
let userPoint = 0;
for(let i = 0; i < QUIZZES.length; i++) {
    var {Question, A, B, C, D, Answer} = QUIZZES[i];
    let AnsInput = prompt(`${Question}\n\nA. ${A}\nB. ${B}\nC. ${C}\nD. ${D}`);
    let check = true;
    while(true){
        if(ANSWER.indexOf(AnsInput.toUpperCase()) === -1){
            alert('Please enter (A, B, C or D) to select a answer.')
            AnsInput = prompt('Enter a new answer:');
        }
        else if(AnsInput.toUpperCase() === Answer){
            if(check) userPoint++;
            alert('NICE TO TRY!');
            break;
        }
        else{
            check = false;
            alert('Nah :(');
            AnsInput = prompt('Enter a new answer:');
        }
    }
}
alert('We are out of question :<');
alert(`Your point: ${userPoint}`);