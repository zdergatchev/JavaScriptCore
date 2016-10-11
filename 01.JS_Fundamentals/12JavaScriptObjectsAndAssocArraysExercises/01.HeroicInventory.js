function inventory(arr) {

    let heroData = [];

    for(let str = 0; str < arr.length; str++){
        // let text = arr[str].split("/");
        // let text = arr[str].split(/[^A-Za-z0-9]\s+/);
        let text = arr[str].split(" / ");
        let name = text[0];
        let heroLevel = Number(text[1]);
        let heroCurrentItems = [];

        if(text.length > 2){
            heroCurrentItems = text[2].split(", ");
        }

        let hero = {
            name: name,
            level: heroLevel,
            items: heroCurrentItems,
        };

        heroData.push(hero);
    }

    console.log(JSON.stringify(heroData));
}



inventory(['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']);