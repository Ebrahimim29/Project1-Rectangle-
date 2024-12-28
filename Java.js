// class Rectangle {
//     constructor(width,height) {
//         this.width=width
//         this.height=height
//     }
//     render(){
//       console.log(this.width,this.height)
//     }
// }

//var obj=new Rectangle(10,20);
//console.log(obj.width,obj.height)
//obj.render()

// class colorRectangle extends Rectangle{
//     constructor(width,height,color){
//         super(width,height)
//         this.color=color
//     }
//     show(){
//         return "<div style='width:"+this.width+"px;height:"+this.height+"px;background:"+this.color+"'></div>"
//     }
// }
// var obj=new colorRectangle(200,100,"yellowgreen");
// var obj2=new colorRectangle(300,500,"red");

// document.getElementById("myDiv").innerHTML=obj.show()
// document.getElementById("myDiv2").innerHTML=obj2.show()

//-----2----Const,Let,Var

// if(true){
//     var x=2;
//     let y=3;
//     const z=5;
// }

// console.log("x:"+x)
// console.log("y:"+y)
// console.log("z:"+z)

//------3----Function,Arrow function

function test(x,y) {
    console.log(x+y)
}
const test2=(x,y)=>{
    console.log(x+y)
}
const test3= y=>y*2

test(10,20)
test2(20,30)
console.log(test3(4))