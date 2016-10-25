function colorize() {
        let items = document.querySelectorAll('table tr');
        let index = 0;
        for (let item of items){
            index++;
            if (index % 2 == 0){
                item.style.background = "Teal";
            }
        }
    }
