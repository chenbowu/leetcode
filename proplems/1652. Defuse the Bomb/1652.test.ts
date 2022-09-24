import { it, expect } from 'vitest'
import { decrypt } from './answer'

it('test 1', () => {
    const code = [5,7,1,4] 
    const k = 3
    const res = decrypt(code, k)
    expect(res).toStrictEqual([12,10,16,13]);
})

it('test 2', () => {
    const code = [ 1, 2, 3 ,4 ] 
    const k = 0
    const res = decrypt(code, k)
    expect(res).toStrictEqual([ 0, 0, 0, 0 ]);
})

it('test 2', () => {
    const code = [2,4,9,3] 
    const k = -2
    const res = decrypt(code, k)
    expect(res).toStrictEqual([12,5,6,13]);
})