function clock() {
    let count = 0;
    return function() {
        count++;
        return count;
    }
}
const stopWatch = clock();
console.log(stopWatch());
console.log(stopWatch());
console.log(stopWatch());
console.log(stopWatch());
console.log(stopWatch());
console.log(stopWatch());
console.log(stopWatch());
const stopWatch1 = clock();
console.log(stopWatch1());
console.log(stopWatch1());
console.log(stopWatch1());
console.log(stopWatch());
