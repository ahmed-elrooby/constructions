var a = 1;
let b = 2;
sayHello();
function sayHello() {
    var a = 3;
    let b = 10;
    console.log(a);
    console.log(b);
}
console.log(`global ${a}`);
console.log(`global ${a}`);