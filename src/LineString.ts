import AbstractGeometry from "./AbstractGeometry";
import Envelope from "./Envelope";
import EnvelopeBuilder from "./EnvelopeBuilder";
import Geometry from "./Geometry";
import GeometryVisitor from "./GeometryVisitor";
import Point from "./Point";

export default class LineString extends AbstractGeometry{
    private points?: Array<Point>;

    constructor(points?: Array<Point>) {
        super();
        this.points = points? points:[] ;
    }
    
    isEmpty(): boolean {
        return (this.points.length===0);
    }

    translate(dx: number, dy: number) {
        this.points.forEach((point)=> point.translate(dx,dy));
    }

    getEnvelope(): Envelope {
        if (this.isEmpty){
            const envB = new EnvelopeBuilder();
            this.points.forEach(point => {
                envB.insert(point.getCoordinate());
            });
            return envB.build();
        }
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

    accept(visitor: GeometryVisitor): void {
        visitor.visitLineString(this);
      }
}