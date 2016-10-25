function addItem() {
        let text = document.getElementById("newItemText").value;
        let items = document.getElementById("items");
        let li = document.createElement('li');
        li.appendChild(document.createTextNode(text));
        items.appendChild(li);
        document.getElementById("newItemText").value = '';

    }
