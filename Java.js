class Rectangle {
    constructor(width,height) {
        this.width=width
        this.height=height
    }
    // 2: Function
    render(){
        console.log(this.width,this.height);
        
    }
}
// var obj = new Rectangle(20,30);
// 1:
// console.log(obj.height,obj.width);
// 2:
// obj.render()
class coloredRectangle extends Rectangle {
    constructor(width,height,color) {
        super(width,height)
        this.color=color
    }
    show(){
        return "<div style='width:"+this.width+"px;height:"+this.height+"px;background:"+this.color+"'></div>"
    }
}
var obj = new coloredRectangle(200,100,"green");
var obj2 = new coloredRectangle(400,300,"red");

document.getElementById("myDiv").innerHTML = obj.show()
document.getElementById("myDiv2").innerHTML = obj2.show()