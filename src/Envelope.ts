import Coordinate from "./Coordinate";

export default class Envelope{
    private bottomLeft?:Coordinate;
    private topRight?:Coordinate;

    constructor(bottomLeft?:Coordinate,topRight?:Coordinate){
        this.bottomLeft = bottomLeft? bottomLeft:[];
        this.topRight = topRight? topRight:[];
    }

    isEmpty(): Boolean {
        return this.bottomLeft.length === 0 && this.topRight.length === 0;
    }

    getXmin():number{
        return this.bottomLeft[1] ? this.bottomLeft[0] : Number.NaN ;

    }

    getXmax():number{
        return this.bottomLeft[1] ? this.topRight[0] : Number.NaN ;
    }

    getYmin():number{
        return this.bottomLeft[1] ? this.bottomLeft[1] : Number.NaN ;
    }

    getYmax():number{
        return this.bottomLeft[1] ? this.topRight[1] : Number.NaN ;
    }

    toString():String{
        if (this.isEmpty()){
            return "L'envelope n'existe pas";
        }
        return "le point bottomLeft : "+this.bottomLeft+", le point topRight :"+this.topRight;
    }
    
}