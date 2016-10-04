function extractingSubsequence(input) {
    input = input.map(Number);
    let result = [];
    let temp = 0;
    for(let i = 0; i < input.length; i++){
        if(input[i] >= temp){
            temp = input[i];
            result.push(temp);
        }
    }
    for(let res of result){
        console.log(res);
    }
}

extractingSubsequence([1, 3 , 8 , 4, 10, 12, 3, 2, 24]);
//extractingSubsequence([1, 2, 3, 4]);
//extractingSubsequence([20, 3, 2, 15, 6, 1]);





