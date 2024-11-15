import "mocha";
import { expect } from "chai";
import Point from "../src/Point";
import WktVisitor from "../src/WktVisitor";
import LineString from "../src/LineString";


describe("test WktVisitor", () => {
    const visitor = new WktVisitor();
    const p1 = new Point([3.0,4.0]);
    const p2 = new Point([2.0,5.0]);
    const points = new LineString([p1,p2]);
    const pEmpty = new Point();
    const pointsEmpty = new LineString();

    it("test accept", () => {
        pEmpty.accept(visitor);
        var wkt=visitor.getResult();
        expect(wkt).to.equal("POINT EMPTY")
        p1.accept(visitor);
        var wkt=visitor.getResult();
        expect(wkt).to.equal("POINT(3 4)")
        pointsEmpty.accept(visitor);
        var wkt=visitor.getResult();
        expect(wkt).to.equal("LINESTRING EMPTY")
        points.accept(visitor);
        var wkt=visitor.getResult();
        expect(wkt).to.equal("LINESTRING(3 4,2 5)")
    });

});