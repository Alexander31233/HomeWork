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




function massivex2(arr) {
    let array = [];
    for (let i = 0; i < arr.length; i++){
        array.push(arr[i] * 2);
    }
    return console.log(array);
}
let res = massivex2([1 ,2 ,3 , 4 ,5 ,6]);
console.log(res);