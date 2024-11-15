import GeometryVisitor from "./GeometryVisitor";
import LineString from "./LineString";
import Point from "./Point";

export default class WktVisitor implements GeometryVisitor{
    private buffer:String;

    visitPoint(point:Point){
        if (point.isEmpty()){
            this.buffer="Je suis un point vide.";
        }else{
            this.buffer="Je suis un point avec x="+point.x()+" et y="+point.y()+".";
        }
    }

    visitLineString(linestring:LineString){
        if (linestring.isEmpty()){
            this.buffer="Je suis une polyligne vide.";
        }else{
            this.buffer="Je suis une polyligne définie par "+linestring.getNumPoints()+" point(s)."
        }
    }

    getResults():String{
        return this.buffer
    }
    

}