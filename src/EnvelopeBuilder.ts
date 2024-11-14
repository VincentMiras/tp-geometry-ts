import Envelope from "./Envelope";
import Point from "./Point";
import Coordinate from "./Coordinate";

export default class EnvelopeBuilder{
    private listpoint?:Array<Point>;
    private bottomLeft?:Coordinate;
    private topRight?:Coordinate;

    insert(point:Point):void{
        this.listpoint.push(point);
    }

    build():Envelope{
        this.bottomLeft=this.listpoint[0].getCoordinate();
        this.topRight=this.listpoint[0].getCoordinate();
        this.listpoint.forEach(point => {
            this.bottomLeft[0]=Math.min(point[0],this.bottomLeft[0])
            this.bottomLeft[1]=Math.min(point[1],this.bottomLeft[1])
            this.topRight[0]=Math.max(point[0],this.topRight[0])
            this.topRight[0]=Math.max(point[1],this.topRight[0])
        });
        return new Envelope(this.bottomLeft,this.topRight);
    }

}