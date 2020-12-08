const readFile = require('fs').readFileSync 

let inputs = []

const file = readFile('input.txt', 'utf-8').split("\n").forEach(data => {
    inputs.push(data.trim());
})

// const F = 0;
// const B = 1;
// const L = 0;
// const R = 1;

function convertSeatToBinary(seat){
    rows = seat.slice(0, 7);
    cols = seat.slice(7, 10);

    let rowBin = "";
    let colBin = "";
    for(let r =0; r<rows.length; r++){
        rowBin += (rows[r]==="F" ? '0' : '1');
    }
    for(let c =0; c<cols.length; c++){
        colBin += (cols[c]==="L" ? '0' : '1');
    }
    let rowDigit = convertBinaryToDecimal(rowBin);
    let colDigit = convertBinaryToDecimal(colBin);
    return [rowDigit, colDigit];
}

function convertBinaryToDecimal(binString){
    return parseInt(binString, 2);
}

function findBiggestSeat(inputs){
    let max = -1;
    
    for(let i=0;i<inputs.length;i++){
        let seat = inputs[i];
        [rowDigit, colDigit] = convertSeatToBinary(seat);
        let number = rowDigit*8 + colDigit;
        if(number > max){
            max = number;
        }
    }

    console.log(max);
}

function findMissingSeat(inputs){
    let list =[]
    for(let i=0;i<inputs.length;i++){
        let seat = inputs[i];
        [rowDigit, colDigit] = convertSeatToBinary(seat);
        let number = rowDigit*8 + colDigit;
        list.push(number)
    }

    list.sort();

    first = list[0];
    for(let i=0;i<list.length;i++){
        if(list[i] - i != first)
        {
            console.log(i+first);
            break;
        }
    }

}

findBiggestSeat(inputs)
findMissingSeat(inputs)
