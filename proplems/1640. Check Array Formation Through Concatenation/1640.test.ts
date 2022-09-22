import { expect, it } from 'vitest'
import { canFormArray } from './answer'

// Example 1:
// Input: arr = [15,88], pieces = [[88],[15]]
// Output: true
// Explanation: Concatenate [15] then [88]

// Example 2:
// Input: arr = [49,18,16], pieces = [[16,18,49]]
// Output: false
// Explanation: Even though the numbers match, we cannot reorder pieces[0].

// Example 3:
// Input: arr = [91,4,64,78], pieces = [[78],[4,64],[91]]
// Output: true
// Explanation: Concatenate [91] then [4,64] then [78]

it('1640 Example 1', () => {
    const arr = [15,88], pieces = [[88],[15]]
    const answer = canFormArray(arr, pieces)
    expect(answer).toBe(true)
})

it('1640 Example 2', () => {
    const arr = [49,18,16], pieces = [[16,18,49]]
    const answer = canFormArray(arr, pieces)
    expect(answer).toBe(false)
})

it('1640 Example 3', () => {
    const arr = [91,4,64,78], pieces = [[78],[4,64],[91]]
    const answer = canFormArray(arr, pieces)
    expect(answer).toBe(true)
})

it('1640 test 4', () => {
    const arr = [37,69,3,74,46], pieces = [[37,69,3,74,46]]
    const answer = canFormArray(arr, pieces)
    expect(answer).toBe(true)
})