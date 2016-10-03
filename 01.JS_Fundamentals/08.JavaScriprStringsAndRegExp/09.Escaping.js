function htmlList(items) {
    return "<ul>\n" +
        items.map(htmlEscape).map(
            items =>`  <li>${items}</li>`).join("\n") + "\n</ul>\n";
    function htmlEscape(text) {
        let map = { '"': '&quot;', '&': '&amp;',
            "'": '&#39;', '<': '&lt;', '>': '&gt;' };
        return text.replace(/[\"&'<>]/g, ch => map[ch]);
    }
}

console.log(htmlList(["<br>", "It's OK"]));