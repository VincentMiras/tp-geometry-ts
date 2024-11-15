import Geometry from "./Geometry";
import LineString from "./LineString";
import Point from "./Point";

export default class WktWriter{

    constructor(){

    }

    write(geometry:Geometry):String{
        if (!geometry.isEmpty()){
            if ( geometry instanceof Point ){
                return "POINT("+geometry.x()+" "+geometry.y()+")";
            }else if ( geometry instanceof LineString ){
                var renvoie="LINESTRING(";
                for (var i=0;i<geometry.getNumPoints();i++){
                    const point=geometry.getPointN(i);
                    renvoie+= point.x()+" "+point.y();
                    if (i<geometry.getNumPoints()-1){
                        renvoie+=","
                    }
                }
                renvoie+=")"
                return renvoie;
            }else{
                throw new TypeError("geometry type not supported");
            }
        }
        else{
            if ( geometry instanceof Point ){
                return "POINT EMPTY";
            }else if ( geometry instanceof LineString ){
                return "LINESTRING EMPTY";
            }else{
                throw new TypeError("geometry type not supported");
            }
        }
    }
}
