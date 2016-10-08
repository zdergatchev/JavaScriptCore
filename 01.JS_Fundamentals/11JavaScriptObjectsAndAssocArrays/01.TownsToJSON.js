function townsToJSON(towns) {
    let townsArray = [];

    for(town of towns.slice(1)){
        let [empty, townName, lat, lng] = town.split(/\s*\|\s*/);
        let townObject = {Town: townName, Latitude: Number(lat), Longitude: Number(lng) };
        townsArray.push(townObject);
    }
    return JSON.stringify(townsArray);
}


console.log(townsToJSON(['|Town|Lat|Lng|', '|Sofia |42|23|']));