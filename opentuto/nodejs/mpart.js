var M = {
    v:'v',
    f:function(){
        console.log(this.v);
    }
}

module.exports = M;
// M 객체를 module 밖에서 사용할 수 있도록 exports(내보내기) 한다.