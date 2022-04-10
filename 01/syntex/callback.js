/*function a(){
    console.log('A');
}
*/
var a = function(){
    console.log('A');
}
a();

function slowfunc(callback){
    callback();
}

slowfunc(a);

// callback - 함수의 매개변수로 함수를 가져가서 실행하는것
// js에서는 함수를 값으로 가질 수 있으므로 가능한 이야기인듯?