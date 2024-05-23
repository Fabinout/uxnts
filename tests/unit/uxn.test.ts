import {Uxn} from "../src/uxn";

describe('Uxn Virtual Machine', () => {
    it('should push to the stack', () => {
        let uxn = new Uxn();

        uxn.lit(42);

        expect(uxn.stack).toBe(42);
    });
});