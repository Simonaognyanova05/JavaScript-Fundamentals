function getNum(r, h){
    
    let V = (1/3) * Math.PI * r * r * h;
    let S = Math.sqrt(r * r + h * h);
    let S1 = Math.PI * r * (r + S);
    console.log(`volume = ${V.toFixed(4)}`);
    console.log(`area = ${S1.toFixed(4)}`);
}