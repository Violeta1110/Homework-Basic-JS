function chineseZodiac (year) {
    let zodiacSign = ['Rat', 'Ox', 'Tiger', 'Rabbit', 'Dragon', 'Snake', 'Horse', 'Goat', 'Monkey', 'Rooster', 'Dog', 'Pig'];
    let result = (year - 4) % 12;
    return result
}

const year = prompt('Enter the year you were born');

function caolculateZodiacSign(year) {
    let parsedYear = parseInt(year);

    if (result === 0) {
        return zodiacSign('Rat')
    } else if (result === 1) {
        return zodiacSign ('Ox')
    } else if (result === 2) {
        return zodiacSign ('Tiger')
    } else if (result === 3) {
        return zodiacSign ('Rabbit')
    } else if (result === 4) {
        return zodiacSign ('Dragon')
    } else if (result === 5) {
        return zodiacSign ('Snake')
    } else if (result === 6) {
        return zodiacSign ('Horse')
    } else if (result === 7) {
        return zodiacSign ('Goat')
    } else if (result === 8) {
        return zodiacSign ('Monkey')
    } else if (result === 9) {
        return zodiacSign ('Rooster')
    } else if (result === 10) {
        return zodiacSign ('Dog')
    } else if (result === 11) {
        return zodiacSign ('Pig')
    } else {
        return 'Invalid year'
    }
}

console.log(result(zodiacSigh));