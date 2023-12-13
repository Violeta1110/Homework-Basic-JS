function chineseZodiac (parsedYear) {
    let result = (parsedYear - 4) % 12;
    return result
}

const year = prompt('Enter the year you were born');

function caolculateZodiacSign(year) {
    let zodiacSign = ['Rat', 'Ox', 'Tiger', 'Rabbit', 'Dragon', 'Snake', 'Horse', 'Goat', 'Monkey', 'Rooster', 'Dog', 'Pig'];
    let parsedYear = parseInt(year);
    let result = chineseZodiac(parsedYear);
    
    if(isNaN(result) || result < 0) {
       
        return 'Invalid year'
    } else {
        
        return zodiacSign[result]
    }
}

console.log(caolculateZodiacSign(year));