function fromJSONtoHTMLtable([JSONobj]) {
    let html = '<table>\n';
    let arr = JSON.parse(JSONobj);

    html += '   <tr>';

    for(let key of Object.keys(arr[0])){
        html += `<th>${htmlEscape(key)}</th>`;
    }
    html += '</tr>\n';

    for(let obj of arr){
        html += '   <tr>';
        for(let prop of Object.keys(obj)){
            html += `<td>${htmlEscape(obj[prop])}</td>`;
        }
        html += '</tr>\n';
    }

    return html + '</table>';

    function htmlEscape(text) {
        text = new String(text);
        let map = { '"': '&quot;', '&': '&amp;',
            "'": '&#39;', '<': '&lt;', '>': '&gt;' };
        return text.replace(/[\"&'<>]/g, ch => map[ch]);
    }
}

console.log(fromJSONtoHTMLtable(['[{"X":5,"Y":7},{"X":2,"Y":4}]']));