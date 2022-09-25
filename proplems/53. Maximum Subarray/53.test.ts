import { it, expect } from 'vitest'
import { maxSubArray } from './answer'

it('Example 1', () => {
    const nums = [-2,1,-3,4,-1,2,1,-5,4]
    const res = maxSubArray(nums)
    expect(res).toBe(6)
})