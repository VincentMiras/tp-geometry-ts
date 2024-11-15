import "mocha";
import { expect } from "chai";
import LineString from "../src/LineString"
import Point from "../src/Point"
import Envelope from "../src/Envelope";

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
    it("test clone LineString", () => {
        const lsvide = new LineString();  
        const lsvclone=lsvide.clone()
        expect(lsvclone).to.not.equal(lsvide);

        const p1=new Point([3.0,4.0]);
        const p2=new Point([5.0,7.5]);
        const lsplein = new LineString([p1,p2]);
        const lspclone=lsplein.clone()
        expect(lspclone).to.deep.equal(lsplein);
        lsplein.translate(1,1);
        expect(lspclone).to.not.deep.equal(lsplein);

        
    });
    it("test Envelope LineString", () => {
        const p1=new Point([3.0,4.0]);
        const p2=new Point([5.0,7.5]);
        const lsplein = new LineString([p1,p2]);
        expect(lsplein.getEnvelope()).to.deep.equal(new Envelope([3,4],[5,7.5]))       
    });
});