function findPrime(num) {
    for(let j=2;j<num;j++) {
        if(num % j === 0){
            return false;
        }
    }
    return true;
}

function primeNum(n) {
    let array = [2];
    for(let i =3;i<n;i++) {
        if(findPrime(i)) {
            array.push(i);
        }
    }
    return array;
};

console.log(primeNum(20));