function addRemoveElements(input) {
    let numbers = [];
    let step = 1;
    for (let i = 0; i < input.length ; i++) {
        //let input = num[i].split(' ');
        let command = input[i];


        if (command === 'add') {
            numbers.push(step + i);
        }
         else if (command === 'remove') {
             numbers.pop();
        }
    }
    if(numbers.length >0){
        for (var number of numbers) {
            console.log(number)
        }
    }
    else{
        console.log("Empty");
    }
}

addRemoveElements(['add', 'add', 'add', 'add']);
addRemoveElements(['remove', 'remove', 'remove']);