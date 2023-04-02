class Circle{
    constructor(radius){
        this.radius = radius;
    }
    get diameter(){
        return 2*this.radius
    }
    get circumference(){
        return Math.PI * this.diameter
    }
    get area(){
        return Math.PI * this.radius * this.radius
    }

    set diameter(newdia){
        this.radius = newdia/2
    }
    set circumference(newcicum){
        this.radius =  newcicum/(2*Math.PI)
    }
    set area(newarea){
        this.radius =  Math.sqrt(newarea/Math.PI)
    }
}
