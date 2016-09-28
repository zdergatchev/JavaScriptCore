function imperialUnits(size) {
    let inches = Number(size[0]);
    let feet = Math.floor(inches / 12);
    let inch = inches % 12;
    console.log(`${feet}\'-${inch}\"`);
}

imperialUnits(['11']);