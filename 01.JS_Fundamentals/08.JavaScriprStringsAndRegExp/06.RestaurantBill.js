function restaurantBill(arr) {
    let purchases = [];
    let sum = 0;
    for (let i = 0; i < arr.length; i+=2){
        let product = arr[i];
        let price = arr[i + 1];

        purchases.push(product);
        sum += Number(price);
    }

    console.log(`You purchased ${purchases.join(', ')} for a total sum of ${sum}`);
}

restaurantBill(['Cola','1.35', 'Pancakes', '2.88']);