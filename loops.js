//Loops
//A the basics
for(let i = 0; i<=10;i++){
    console.log(i);
}

for(let i = 10; i<=400;i++){
    console.log(i);
}
let count = 0;
for(let i = 12; i<4000;i++){
    if(count == 2){
        console.log(i);
        count = 0;
    }else{
        count ++;
    }
}

//B get even
for(let i = 1; i<=100; i++){
    (i%2==0)? console.log(i, "<--is an even number"): console.log(i);
}

//C Give me Five
for(let i = 1; i<=100;i++){
    if(i%5 == 0 & i%3==0){
        console.log(`I found a ${i}. Three is a crowrd and High five!`);
        continue;
    }
    (i%5==0)? console.log(`I found a ${i}. High five!`): null;
    (i%3==0)? console.log(`I found a ${i}. Three is a crowd`): null;
}

//D savings
let bank_account = 0;
for(let i = 1 ; i<=10 ; i++){
    bank_account += i;
}
console.log("Balance: ", bank_account)

let bank_account_reset = 0;

for(let i = 1 ; i<=100 ; i++){
    bank_account_reset += i*2;
}
console.log("Balance after bonus: ", bank_account_reset)
