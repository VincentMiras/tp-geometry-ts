import Coordinate from "./Coordinate";
import Envelope from "./Envelope";
import GeometryVisitor from "./GeometryVisitor";
import LineString from "./LineString";
import Point from "./Point";

export default class EnvelopeBuilder implements GeometryVisitor{
    private xmin: number;
    private ymin: number;
    private xmax: number;
    private ymax: number;

    constructor() {
        this.xmin = Number.NaN;
        this.ymin = Number.NaN;
        this.xmax = Number.NaN;
        this.ymax = Number.NaN;
    }

    visitPoint(point:Point){
            this.insert(point.getCoordinate());
            this.insert(point.getCoordinate());
    }

    visitLineString(points: LineString): void {
        if (!points.isEmpty()) {
            for (let index = 0; index < points.getNumPoints(); index++) {
                this.insert(points.getPointN(index).getCoordinate());   
            }
        }
    }

    insert(coordinate: Coordinate) {
        if (Number.isNaN(this.xmin)) {
            this.xmin = coordinate[0];
            this.xmax = coordinate[0];
            this.ymin = coordinate[1];
            this.ymax = coordinate[1];
        } else {
            if (this.xmin>coordinate[0]) {
                this.xmin = coordinate[0];
            } else if (this.xmax<coordinate[0]) {
                this.xmax = coordinate[0];
            }

            if (this.ymin>coordinate[1]) {
                this.ymin = coordinate[1];
            } else if (this.ymax<coordinate[1]) {
                this.ymax = coordinate[1];
            }
        }  
    }

    build(): Envelope {
        return new Envelope([this.xmin,this.ymin],[this.xmax,this.ymax]);
    }
}