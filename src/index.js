module.exports = function reverse (n) {
   let number;
    
   (n < 0) ? number = (-1) * n : number = n;

    return +Array.from(number.toString()).reverse().join('');
}
