import "mocha";
import { expect } from "chai";
import Envelope from "../src/Envelope";
import EnvelopeBuilder from "../src/EnvelopeBuilder";
import Point from "../src/Point";
import LineString from "../src/LineString";

describe("test EnvelopeBuilder", () => {
    const envB = new EnvelopeBuilder();

    it("test build", () => {

        envB.insert([1.0,2.0]);
        expect(envB.build()).to.deep.equal(new Envelope([1.0,2.0],[1.0,2.0]));
        envB.insert([5.0,6.0]);
        expect(envB.build()).to.deep.equal(new Envelope([1.0,2.0],[5.0,6.0]));
        envB.insert([0.0,3.0]);
        expect(envB.build()).to.deep.equal(new Envelope([0.0,2.0],[5.0,6.0]));
        envB.insert([0.0,1.0]);
        expect(envB.build()).to.deep.equal(new Envelope([0.0,1.0],[5.0,6.0]));
    });
    it("test visite Point", () => {
        const p1=new Point([4,5]);
        envB.visitPoint(p1);
    });
    it("test visite LineString", () => {
        const ls=new LineString([new Point([4,5]),new Point([1,7])]);
        envB.visitLineString(ls);
    });
});