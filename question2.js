arr = [1, 3, 5, 2, 4]

getsquareofarray = (arr) => {
    let res = [];
    for (let i = 0; i < arr.length; i++) {
        res.push(arr[i] * arr[i]);
    }
    return res;
    }

    console.log(getsquareofarray(arr));