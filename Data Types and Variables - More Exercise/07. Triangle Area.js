function x(a, b, c) {
    let p = 0.5 * (a + b + c);
    let s = Math.sqrt(p * (p - a) * (p - b) * (p - c));
    console.log(s);
}