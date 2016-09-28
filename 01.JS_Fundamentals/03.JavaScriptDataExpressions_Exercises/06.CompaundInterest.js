 function compaundInterest(calculation) {
    let pSum = Number(calculation[0]);
    let iRate = Number(calculation[1]) / 100;
    let cFreq = 12 / Number(calculation[2]);
    let totalTSpan = Number(calculation[3]);
    let totalSum = pSum * (Math.pow(1 + iRate / cFreq, totalTSpan * cFreq));
    console.log(totalSum);
}

 compaundInterest(['100000', '5', '12', '25']);