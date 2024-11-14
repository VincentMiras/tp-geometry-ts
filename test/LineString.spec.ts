import "mocha";
import { expect } from "chai";
import LineString from "../src/LineString"
import Point from "../src/Point"

describe("test Linestring", () => {
    it("test default constructor", () => {
        const ls = new LineString();
        expect(ls.getType()).to.equal("LineString");
        expect(ls.getNumPoints()).to.equal(0);
        expect(ls.getPointN(0)).to.equal(null);
        expect(ls.getPointN(-2)).to.equal(null);
        expect(ls.getPointN(2)).to.equal(null);
    });
    it("test constructor with coordinates", () => {
        const ls = new LineString([new Point([3.0,4.0]),new Point([5.0,7.5])]);
        expect(ls.getType()).to.equal("LineString");
        expect(ls.getNumPoints()).to.equal(2);
        expect(ls.getPointN(0)).to.deep.equal(new Point([3.0,4.0]));
    });
    
});