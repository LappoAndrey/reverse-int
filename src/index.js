module.exports = function reverse(n) {
    n = String(Math.abs(n));
    let rezult = n.split("").reverse().join("");
    rezult = Number(rezult);
    return rezult;
};
