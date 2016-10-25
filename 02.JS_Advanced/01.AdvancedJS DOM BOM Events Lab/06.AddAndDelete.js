function addItem() {
        let text = document.getElementById("newText").value;
        let items = document.getElementById("items");
        let li = document.createElement('li');
        li.appendChild(document.createTextNode(text));
        let span = document.createElement('span');
        li.appendChild(span);
        span.innerHTML = "<a href='#'>[Delete]</a>";
        span.firstChild.addEventListener('click', deleteItem);
        items.appendChild(li);
        document.getElementById("newText").value = '';
        function deleteItem(){
            let li = this.parentNode.parentNode;
            let ul = li.parentNode;
            ul.removeChild(li);

        }
    }

