import { testNumber as tN } from "./module2.js";

export const testString = "Hello, It is String!";

export const testFunc=()=>{
    return "this is Function and x:"+tN
}

export class testClass{
    constructor(x){
        this.x=x
    }
    handlelog(){
        console.log("this is "+this.x+ " in test Class ");
        
    }
}

export default "It is default";