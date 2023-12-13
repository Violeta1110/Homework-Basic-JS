// HOMEWORK PART 1 --------------------------------------------------------------------------

function typeOfParameter(parameter) {
    console.log(typeof parameter, parameter);
}

typeOfParameter ('Viki');
typeOfParameter (3);
typeOfParameter (true);
typeOfParameter ();

// HOMEWORK PART 2 --------------------------------------------------------------------------

function convertHumanYearsToDogYears (humanYears) {
    let result = humanYears * 7;
    console.log(result)
    return result
}

convertHumanYearsToDogYears (5);

// HOMEWORK PART 3 --------------------------------------------------------------------------

// function atm(parsedNeededCash) {
//     let atmCash = 1000;
//     let rest = atmCash - parsedNeededCash;
//     return rest
// }

// const neededCash = prompt('Enter how much cash do you need');

// function cashAndRest (neededCash) {
//     let parsedNeededCash = parseInt(neededCash);
//     if (parsedNeededCash <= 1000) {
//         return atm(parsedNeededCash), rest;
//     } else if (parsedNeededCash > 1000) {
//         return 'We do not have that amount of cash'
//     } else {
//         return 'Invalid input'
//     }
// }

// console.log(cashAndRest(neededCash), rest);

function atm(neededCash) {
    let atmCash = 1000;
    let rest = 1000 - neededCash;
    if (neededCash <= 1000) {
      console.log(neededCash, rest);
    } else if (neededCash > 1000) {
        console.log("ATM doesn't have enough money")
    } 
}

atm(1000)
atm(1200)