import { it, expect } from 'vitest'
import { rotatedDigits } from './answer'

it('test1', () => {
    const res = rotatedDigits(10)
    expect(res).toBe(4)
})

it('test2', () => {
    const res = rotatedDigits(1)
    expect(res).toBe(0)
})

it('test3', () => {
    const res = rotatedDigits(2)
    expect(res).toBe(1)
})

it('test4', () => {
    const res = rotatedDigits(30)
    expect(res).toBe(15)
})