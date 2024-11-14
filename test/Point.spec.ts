import "mocha";
import { expect } from "chai";
import Point from "../src/Point";

describe("test Point", () => {
    it("test default constructor", () => {
        const p = new Point();
        expect(p.getType()).to.equal("Point");
        expect(p.getCoordinate()).to.deep.equal([]);
        expect(Number.isNaN(p.x()));
        expect(Number.isNaN(p.y()));
        expect(p.isEmpty()).to.equal(true);
        p.translate(1,1)
        expect(p).to.deep.equal(new Point())
    });
    it("test constructor with coordinates", () => {
        const p = new Point([3.0,4.0]);
        expect(p.getType()).to.equal("Point");
        expect(p.getCoordinate()).to.deep.equal([3.0,4.0]);
        expect(p.x()).to.equal(3.0);
        expect(p.y()).to.equal(4.0);
        expect(p.isEmpty()).to.equal(false);
        p.translate(1,1)
        expect(p).to.deep.equal(new Point([4.0,5.0]))

    });
    it("test clone Point", () => {
        const pvide = new Point();  
        const pvclone=pvide.clone()
        expect(pvclone).to.not.equal(pvide);

        const pplein=new Point([3.0,4.0]);
        const ppclone=pplein.clone()
        expect(ppclone).to.deep.equal(pplein);
        pplein.translate(1,1);
        expect(ppclone).to.not.deep.equal(pplein);

        
    });
});

