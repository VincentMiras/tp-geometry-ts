import "mocha";
import { expect } from "chai";

import Point from "../src/Point";
import LineString from "../src/LineString";
import WktWriter from "../src/WktWriter"

describe("test WktWriter", () => {
    it("test complet", () => {
        const pv=new Point()
        const pp=new Point([0,1])
        const pp2=new Point([1,2])
        const lsv=new LineString()
        const lsp=new LineString([pp,pp2])
        const Wkt=new WktWriter()
        expect(Wkt.write(pv)).to.equal("POINT EMPTY");
        expect(Wkt.write(pp)).to.equal("POINT(0 1)");
        expect(Wkt.write(lsv)).to.equal("LINESTRING EMPTY");
        expect(Wkt.write(lsp)).to.equal("LINESTRING(0 1,1 2)");
    });
});