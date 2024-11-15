import Coordinate from "./Coordinate";
import Envelope from "./Envelope";
import EnvelopeBuilder from "./EnvelopeBuilder";
import Geometry from "./Geometry";

export default class Point implements Geometry{
  private coordinate?: Coordinate;

  constructor(coordinate?: Coordinate) {
    this.coordinate = coordinate? coordinate:[];
  }
  
  isEmpty(): boolean {
    return (this.coordinate.length===0);
  }

  translate(dx: number, dy: number) {
    if (!this.isEmpty()){
      this.coordinate[0]+=dx;
      this.coordinate[1]+=dy;
    }
  }

  getEnvelope(): Envelope {
    if (this.isEmpty){
      const envB = new EnvelopeBuilder();
      envB.insert(this.coordinate);
      return envB.build();
    }
  }

  clone(): Point{
    if (!this.isEmpty()){
      return new Point([this.x(),this.y()]);
    }
    return new Point();
  }

  getType(): string {
    return "Point";
  }

  getCoordinate(): Coordinate {
    return this.coordinate;
  }

  x(): number {
    return this.coordinate[1] ? this.coordinate[0] : Number.NaN ;
  }

  y(): number {
    return this.coordinate[1] ? this.coordinate[1] : Number.NaN ;
  }

}
