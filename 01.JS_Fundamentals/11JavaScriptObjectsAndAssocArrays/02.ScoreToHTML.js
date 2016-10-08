function scoreToHTML([scoreJSON]) {
    let html = '<table>\n';
    html += '   <tr><th>name</th><th>score</th></tr>\n';

    let arr = JSON.parse(scoreJSON);

    for(obj of arr){
        html += `   <tr><td>${htmlEscape(obj['name'])}` + `</td><td>${htmlEscape(obj['score'])}</td></tr>\n`;

    }

    html += '</table>';
    return html;

    function htmlEscape(text) {
        text = new String(text);
        let map = { '"': '&quot;', '&': '&amp;',
            "'": '&#39;', '<': '&lt;', '>': '&gt;' };
        return text.replace(/[\"&'<>]/g, ch => map[ch]);
    }
}


console.log(scoreToHTML(['[{"name":"Pesho & Kiro","score":479},{"name":"Gosho, Maria & Viki","score":205}]']));