import {capitalizeFirstLetter} from "./stringFunctions";
import {concatenateString} from './stringFunctions';
import {returnSecondWord} from './stringFunctions';

describe('string functions', () => {

    describe('capitalize first letter function', () => {

        it('returns Hello world for hello world', () => {
            expect(capitalizeFirstLetter('hello world')).toBe('Hello world')
        })

        it('does not return this Word for this word', () => {
            expect(capitalizeFirstLetter('this word')).not.toBe('this Word')
        })
    })

    describe('concatenates two strings', () => {

        it("returns 'hello world' for 'hello' 'world'", () => {
            expect(concatenateString('hello', 'world')).toBe('hello world')
        })

        it("does not return 'helloworld' for 'hello' 'world'", () => {
            expect(concatenateString('hello', 'world')).not.toBe('helloworld')
        })
    })

    describe('return second word function', () => {

        it("returns 'world' for 'hello world'", () => {
            expect(returnSecondWord('hello world')).toBe('world')
        })

        it("does not return 'hello' for 'hello world'", () => {
            expect(returnSecondWord('hello world')).not.toBe('hello')
        })
    })
})