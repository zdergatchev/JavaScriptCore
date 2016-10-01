function solve(input) {
    let number = Number(input[0]);
    for(let i=1;i<input.length;i++){
        let newNum = action(input[i],number);
        console.log(newNum);
        number = newNum;
    }

    function action(command,number) {
        switch (command){
            case "chop": return number/2;
            case "dice": return Math.sqrt(number);
            case "spice": return 1 + number;
            case "bake": return number * 3;
            case "fillet": return number - 0.2*number;
        }
    }
}