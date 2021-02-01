const numbers = [3,4,5,6,7,8];
const output =[];
for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    const result = element * element;
    output.push(result);

}
console.log(output);
console.log("map");

function add(element) {
    return element * element;
}
const result = numbers.map(function (elements) {
    return elements* elements;
     
})
console.log(result);
const square = numbers => numbers*numbers;
console.log('arrow', square);

const square1 = numbers.map( x => x*x );
console.log('map+arrow', square1);

const bigger = numbers.filter(x => x>5);
const bigger1= numbers.find(x => x>5 );
console.log(bigger1);