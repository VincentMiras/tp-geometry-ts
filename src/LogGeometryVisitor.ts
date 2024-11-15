import GeometryVisitor from "./GeometryVisitor";
import LineString from "./LineString";
import Point from "./Point";

export default class LogGeometryVisitor implements GeometryVisitor{

    constructor(
        private log=console.log
    ){

    }

    visitPoint(point:Point){
        if (point.isEmpty()){
            this.log("Je suis un point vide")
        }else{
            this.log("Je suis un point avec x="+point.x()+" et y="+point.y()+".")
        }
    }

    visitLineString(linestring:LineString){
        if (linestring.isEmpty()){
            this.log("Je suis une polyligne vide")
        }else{
            this.log("Je suis une polyligne définie par "+linestring.getNumPoints()+" point(s).")
        }
    }
}