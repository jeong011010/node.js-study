var o = {
    v1:'v1',
    v2:'v2',
    f1:function (){
        console.log(this.v1);
    },
    f2:function (){
        console.log(this.v2); // 객체의 이름이 바뀌어도 this를 통해 해당 객체 안의 값을 불러올 수 있음.
    }
}

function f1(){ // 함수 이름이 중복이 될 수 있음
    console.log("this is bug");
}

o.f1(); // 그 때, 객체에 묶어두면 이름이 중복되어도 묶여진 객체에 따라 따로 사용할 수 있음.
f1();
o.f2();