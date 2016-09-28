function assignProperties(properties) {
    let result = {
    [properties[0]]: properties[1],
    [properties[2]]: properties[3],
    [properties[4]]: properties[5]}
    console.log(result);
}

assignProperties(['name', 'Pesho', 'age', '23', 'gender', 'male']);