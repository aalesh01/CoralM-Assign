arr = [1, 3, 5, 2, 4]

getalternateofarrayandsquare = (arr) => {
    let res = [];
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 == 0) {
        res.push(arr[i] * arr[i]);
        }
    }
    return res;
    }
console.log(getalternateofarrayandsquare(arr));