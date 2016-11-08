function summary(selector){
    $(selector).click(function () {
      let text = $('#content').find('strong').text();
        //console.log(text);
        let summary = $(`<div id="summary">
            <h2>Summary</h2>
            <p>${text}</p>
        </div>`);

        $('#content').parent().append(summary);
    })
}