import "mocha";
import { expect } from "chai";
import LineString from "../src/LineString"
import Point from "../src/Point"

describe("test Linestring", () => {
    it("test default constructor", () => {
        const ls = new LineString();
        expect(ls.getType()).to.equal("LineString");
        expect(ls.getNumPoints()).to.equal(0);
        expect(ls.getPointN(0)).to.equal(undefined);
        expect(ls.getPointN(-2)).to.equal(undefined);
        expect(ls.getPointN(2)).to.equal(undefined);
        expect(ls.isEmpty()).to.equal(true);
        ls.translate(1,1)
        expect(ls).to.deep.equal(new LineString())
    });
    it("test constructor with coordinates", () => {
        const p1=new Point([3.0,4.0]);
        const p2=new Point([5.0,7.5]);
        const ls = new LineString([p1,p2]);
        expect(ls.getType()).to.equal("LineString");
        expect(ls.getNumPoints()).to.equal(2);
        expect(ls.getPointN(0)).to.deep.equal(new Point([3.0,4.0]));
        expect(ls.getPointN(-2)).to.equal(undefined);
        expect(ls.isEmpty()).to.equal(false);
        ls.translate(1,1)
        expect(ls).to.deep.equal(new LineString([new Point([4.0,5.0]),new Point([6.0,8.5])]))
    });    
});