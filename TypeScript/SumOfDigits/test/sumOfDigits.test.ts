import { describe, it, expect } from "@jest/globals";
import {digitalRoot} from "../src/sumOfDigits"



describe('Digital root is the recursive sum of all the digits in a number. ', () => {

    it('is one digit number', () => {
        expect(digitalRoot(5)).toBe(5);
    });
    it('reducing in this way until a single-digit number is produced', () => {
        expect(digitalRoot(16)).toBe(7);
    });
    it('reducing in this way until a single-digit number is produced', () => {
        expect(digitalRoot(456)).toBe(6);
    });

    it('reducing in this way until a single-digit number is produced', () => {
        expect(digitalRoot(13)).toBe(4);
    });
    it('reducing in this way until a single-digit number is produced', () => {
        expect(digitalRoot(10)).toBe(1);
    });
});