function multiplicationTable(dimension) {
    let n = Number(dimension[0]);
    console.log('<table border="1">');
    let a = 'x';
    for (let i = 1; i <= 1; i++) {
        process.stdout.write("<tr>");
        process.stdout.write("<th>" + a + "</th>");
        for(let col = 1; col <= n; col++){
            process.stdout.write("<th>" + col + "</th>");
        }
        process.stdout.write("</tr>\n");
    }

    for (let i = 1; i <= n; i++) {
        process.stdout.write("<tr>");
        process.stdout.write("<th>" + i + "</th>");
        process.stdout.write("<td>" + i + "</td>");
        for (var j = 2; j <= n; j++) {
            process.stdout.write("<td>" + i * j + "</td>");
        }
        process.stdout.write("</tr>\n");
    }
    console.log('</table>');
}


multiplicationTable(['3']);