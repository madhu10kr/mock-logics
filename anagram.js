function anagram(a,b) {
    let array = []
    let firstString = a.split('');
    let secondString = b.split('');
   
    for(var i = 0;i<firstString.length;i++) {
        for(var j = 0;j<secondString.length;j++){
            if(firstString[i] == secondString[j]) {
                array.push(firstString[i]);
                break;
            }
        }
    }
    if(array.join('') == a) {
        return 'anagram'
    }
    
   
    return 'not anagram';
};
console.log(anagram('abcd','dcab'));
console.log(anagram('aacdefgh','aacdefgh'));

// let result = firstString.filter(unique =&gt; {
// return firstString.indexOf(unique) === firstString.lastIndexOf(unique);
// });
// let result1 = firstString.filter(unique =&gt; {
// return firstString.indexOf(unique) !== firstString.lastIndexOf(unique);
// });
// for(var k = 0;k&lt;=result1.lenght;k=k+1) {
// result.push(result1[k])
// };