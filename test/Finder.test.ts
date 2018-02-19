import Finder from "../src/Finder";
import FT from "../src/FT";
import Thing from "../src/Thing";

describe("FinderTests", () => {
    const sue = new Thing();
    const greg = new Thing();
    const sarah = new Thing();
    const mike = new Thing();

    beforeEach(() => {
        sue.name = "Sue";
        sue.birthDate = new Date(1950, 0, 1);
        greg.name = "Greg";
        greg.birthDate = new Date(1952, 5, 1);
        sarah.name = "Sarah";
        sarah.birthDate = new Date(1982, 0, 1);
        mike.name = "Mike";
        mike.birthDate = new Date(1979, 0, 1);
    });

    it("returns empty results when given empty list", () => {
        const list = [];
        const finder = new Finder(list);
        
        const result = finder.Find(FT.One);
        
        expect(result.P1).toBeUndefined();
        expect(result.P2).toBeUndefined();
    });

    it("returns empty results when given one person", () => {
        const list = [sue];
        const finder = new Finder(list);
        
        const result = finder.Find(FT.One);
        
        expect(result.P1).toBeUndefined();
        expect(result.P2).toBeUndefined();
    });

    it("returns closest two for two people", () => {
        const list = [sue, greg];
        const finder = new Finder(list);
        
        const result = finder.Find(FT.One);
        
        expect(result.P1).toBe(sue);
        expect(result.P2).toBe(greg);
    });

    it("returns furthest two for two people", () => {
        const list = [mike, greg];
        const finder = new Finder(list);
        
        const result = finder.Find(FT.Two);
        
        expect(result.P1).toBe(greg);
        expect(result.P2).toBe(mike);
    });

    it("returns furthest two for four people", () => {
        const list = [sue, sarah, mike, greg];
        const finder = new Finder(list);
        
        const result = finder.Find(FT.Two);
        
        expect(result.P1).toBe(sue);
        expect(result.P2).toBe(sarah);
    });

    it("returns closest two for four people", () => {
        const list = [sue, sarah, mike, greg];
        const finder = new Finder(list);
        
        const result = finder.Find(FT.One);
        
        expect(result.P1).toBe(sue);
        expect(result.P2).toBe(greg);
    });
    
});
