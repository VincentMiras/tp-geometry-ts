import "mocha";
import { expect } from "chai";
import Envelope from "../src/Envelope"

describe("test Envelope", () => {
    it("test default constructor", () => {
        const e=new Envelope();
        expect(e.isEmpty()).to.equal(true);
        expect(Number.isNaN(e.getXmax()));
        expect(Number.isNaN(e.getXmin()));
        expect(Number.isNaN(e.getYmax()));
        expect(Number.isNaN(e.getYmin()));
        expect(e.toString()).to.equal("L'envelope n'existe pas");
    });
    it("test constructor avec coordonnées", () => {
        const e=new Envelope([0,1],[2,3]);
        expect(e.isEmpty()).to.equal(false);
        expect(e.getXmax()).to.equal(2);
        expect(e.getXmin()).to.equal(0);
        expect(e.getYmax()).to.equal(3);
        expect(e.getYmin()).to.equal(1);
        expect(e.toString()).to.equal("le point bottomLeft : "+[0,1]+", le point topRight :"+[2,3]);
    });
});