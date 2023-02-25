var one = null;

var two = one && null;
console.log(two);

var three = one?.one.value;
console.log(three);

console.log(two);

var four = '';
var five = false && true;
console.log(five);

var six = undefined;
var seven = six && true;
console.log(seven);

var foo = {
    '' : ''
}
console.log(foo);