//Sustituye /***/ por las instrucciones adeacuadas que cumplan las operaciones 
//y salidas indicadas en los comentarios.


function printArray(array:Array<number>):void{
       console.log(array);
}

let array:number[]=[2,3,4];
console.log(array[0]) //2
printArray(array); // 3,4
array=[3,4,5];
printArray(array); // 3,4,5
console.log(array[2]) //5
printArray(array); // 3,4
array=[3,4,1];
printArray(array); // 3,4,1
array=[8,3,4,1];
printArray(array); // 8,3,4,1
/** check if every number is greater than 3 */
let everyisgreater = array.every((value) => value > 3);
console.log(everyisgreater);  //false
/** check if every number is less than 10 */
let everyisless = array.every((value) => value < 10);
console.log(everyisless);  //true
console.log(array.sort()); //1,3,4,8
console.log(array.reverse()); //8,4,3,1
