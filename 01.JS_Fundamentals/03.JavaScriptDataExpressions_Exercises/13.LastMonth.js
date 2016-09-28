function lastMonth(date){
    let month = Number(date[1]) - 1;
    let year = Number(date[2]);
    var prevMonthDays = new Date(year, month, 0);
    console.log(prevMonthDays.getDate());
}

lastMonth(['17','3','2002']);
//lastMonth(['13','12','2004']);