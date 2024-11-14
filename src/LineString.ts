import Geometry from "./Geometry";
import Point from "./Point";

export default class LineString implements Geometry{
    private points?: Array<Point>;

    constructor(points?: Array<Point>) {
        this.points = points? points:[] ;
    }
    
    isEmpty(): boolean {
        return (this.points.length===0);
    }

    translate(dx: number, dy: number) {
        this.points.forEach((point)=> point.translate(dx,dy));
    }

    clone(): LineString{
        if (!this.isEmpty()){
            var lscopy=new LineString()
            this.points.forEach(point => {lscopy.points.push(point.clone())  
            });
            return lscopy;
        }
        return new LineString();
    }
    
    getType(): string {
        return "LineString";
    };

    getNumPoints():number{
        return this.points.length;
    }
    
    getPointN(n:number):Point{
        return this.points ? this.points[n] : null ;

    }
}