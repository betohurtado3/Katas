import { describe, it, expect } from "@jest/globals";
import {getCount} from "../src/vowelCount"



describe('Return the number (count) of vowels in the given string. ', () => {
    it('should pass a sample test', () => {
        expect(getCount("abracadabra")).toBe(5);
    });

    it('should pass a sample test', () => {
        expect(getCount("aeiou")).toBe(5);
    });
});