const n_bills = Number(prompt('Enter n bills:'));
const TotalBill = [];
const Tip = [];
for(let i = 0; i < n_bills; i++){
    TotalBill.push(Number(prompt(`Enter the price of bill ${i+1}:`)));
    while(TotalBill[TotalBill.length-1] <= 0){
        TotalBill.pop();
        TotalBill.push(Number(prompt(`Enter the price of bill ${i+1}:`)));  
    }
}
for(let i = 0; i < n_bills; i++){
    if(TotalBill[i] < 50) {
        Tip[i] = TotalBill[i] * 0.2;
    }
    else if(TotalBill[i] < 200) {
        Tip[i] = TotalBill[i] * 0.15;
    }
    else Tip[i] = TotalBill[i] * 0.1;
}

for(let i = 0; i < n_bills; i++){
    confirm(Tip[i]);
}
for(let i = 0; i < n_bills; i++){
    confirm(TotalBill[i]+Tip[i]);
}