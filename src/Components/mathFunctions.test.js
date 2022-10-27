import {sum}  from './mathFunctions'
import {divide} from './mathFunctions'
import {multiply} from './mathFunctions'
import {subtract} from './mathFunctions'

describe('math functions', () => {

    describe('sum function', () => {

        it('adds 1 + 4 to equal 5', () => {
            expect(sum(1, 4)).toBe(5)
        })

        it('adds 1 + 1 not to equal 3', () => {
            expect(sum(1, 1)).not.toBe(3)
        })

        it('adds 1 + 0 to equal 1', () => {
            expect(sum(1, 0)).toBe(1)
        })})
    
    describe('subtract function', () => {

        it('subtracts 4 - 2 to equal 2', () => {
            expect(subtract(4,2)).toBe(2)
        })

        it('subtracts 3 - 5 not to equal 2', () => {
            expect(subtract(3, 5)).not.toBe(2)
        })
    })

    describe('divide function', () => {

        it('divides 6 / 3 to equal 2', () => {
            expect(divide(6, 3)).toBe(2)
        })

        it('divides 8 / 4 to not equal 4', () => {
            expect(divide(8, 4)).not.toBe(4)
        })
    })

    describe('multiplication function', () => {

        it('multiplies 3 * 2 to equal 6', () => {
            expect(multiply(3, 2)).toBe(6)
        })

        it('multiplies 3 * 3 not to equal 5', () => {
            expect(multiply(3, 3)).not.toBe(5)
        })
    })
})