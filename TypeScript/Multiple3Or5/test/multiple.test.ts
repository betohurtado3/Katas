import { describe, it, expect } from "@jest/globals";
import {addMultiples} from "../src/multiple3Or5"



describe('Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.  ', () => {
    it('should handle basic tests', () => {
        expect(addMultiples(10)).toBe(23);
    });
});