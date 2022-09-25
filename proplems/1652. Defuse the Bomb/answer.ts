// 你有一个炸弹需要拆除，时间紧迫！你的情报员会给你一个长度为 n 的 循环 数组 code 以及一个密钥 k 。

// 为了获得正确的密码，你需要替换掉每一个数字。所有数字会 同时 被替换。

// 如果 k > 0 ，将第 i 个数字用 接下来 k 个数字之和替换。
// 如果 k < 0 ，将第 i 个数字用 之前 k 个数字之和替换。
// 如果 k == 0 ，将第 i 个数字用 0 替换。
// 由于 code 是循环的， code[n-1] 下一个元素是 code[0] ，且 code[0] 前一个元素是 code[n-1] 。

// 给你 循环 数组 code 和整数密钥 k ，请你返回解密后的结果来拆除炸弹！

export function decrypt(code: number[], k: number): number[] {
    const n = code.length
    const ans = new Array(n).fill(0)
    if (k === 0) return ans

    const newCode = new Array(n * 2).fill(0).map((_, i) => {
        return code[i % n]
    });
    // [1, 2, 3, 4, 1, 2, 3, 4]
    // k = 2; l = 1; r = k;
    // k = -2; l = n + k; r = n - 1
    code = newCode
    let l = k > 0 ? 1 : n + k
    let r = k > 0 ? k : n - 1
    let count = 0
    for (let i = l; i <= r; i ++) {
        count += code[i]
    }
    for (let i = 0; i < n; i++) {
        ans[i] = count
        count -= code[l]
        count += code[r + 1]
        l++
        r++
    }

    return ans
};