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
        var wkt=visitor.getResults();
        expect(wkt).to.equal("Je suis un point vide.")
        p1.accept(visitor);
        var wkt=visitor.getResults();
        expect(wkt).to.equal("Je suis un point avec x=3 et y=4.")
        pointsEmpty.accept(visitor);
        var wkt=visitor.getResults();
        expect(wkt).to.equal("Je suis une polyligne vide.")
        points.accept(visitor);
        var wkt=visitor.getResults();
        expect(wkt).to.equal("Je suis une polyligne définie par 2 point(s).")
    });

});