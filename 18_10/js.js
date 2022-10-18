function hello() {
    return document.write("Hello Javascript");
}
hello();



function numCube(x) {
    return x ** 3;

}
let num = numCube(5);
console.log(num);




let name = "Vasiliy"

function getName(x, message ="Vasiliy") {
    if (name = "Vasiliy"){
        return "Hello Vasiliy";
    }else{
        return "Hello guest";
    }

}
let gName = getName( "Vasiliy");
console.log(gName);


let array = [1, 2 ,3 ,4 ,5 ,6 ,7];

function massivex2(arr) {
    for (let i = 0; i < array.length; i++){
        array = array[i] * 2;

    }
    return arr;
}
let res = massivex2();
console.log(res);