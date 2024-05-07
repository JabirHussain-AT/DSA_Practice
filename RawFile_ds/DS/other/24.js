const read=require('readline-sync')

class Area{
    circle(){
        const pi=3.14
        let radius=parseFloat(read.question("enter the radius"))
        console.log(`area of circle is ${pi*radius*radius}`);
        
    }
    square(){
        let side=parseFloat(read.question("enter the measure of side"))
        console.log(`area of square is ${side*side}`);
    }
    rectangle(){
        let length=parseFloat(read.question("enter the length of rectangle"))
        let width=parseFloat(read.question("enter the width of rectangle"))
        console.log(`area of rectangle is ${length*width}`);
    }
    triangle(){
        let height=parseFloat(read.question("enter the height of triangle"))
        let width=parseFloat(read.question("enter the width of triangle"))
        console.log(`area of triangle is ${1/2*height*width}`)
    }
}
class MyClass extends Area{
    main(){
        let choice=parseInt(read.question("enter your choice"))
        
        if(choice===1){
            thearea.circle()
        }
        else if(choice===2){
            thearea.square()
        }
        else if(choice===3){
            thearea.rectangle()
        }
        else if(choice==4){
            thearea.triangle()
        }
        else{
            console.log("invalid choice");
        }
    }
}
let thearea=new MyClass();
thearea.main()
    
    
    



