function shuffleCount(input) {
    const arr = new Array(input);
    let topDeck = [input / 2];
    let bottomDeck = [];


    for (let i = 1; i < arr.length; i++) {
        if (i == arr.length / 2) {
            bottomDeck = arr.slice(i)
        } else {
            // topDeck.push(i);
            // console.log(topDeck[i])
        }
    }
    console.log(bottomDeck[0]);
}

shuffleCount(8);