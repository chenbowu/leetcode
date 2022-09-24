// 你有一个炸弹需要拆除，时间紧迫！你的情报员会给你一个长度为 n 的 循环 数组 code 以及一个密钥 k 。

// 为了获得正确的密码，你需要替换掉每一个数字。所有数字会 同时 被替换。

// 如果 k > 0 ，将第 i 个数字用 接下来 k 个数字之和替换。
// 如果 k < 0 ，将第 i 个数字用 之前 k 个数字之和替换。
// 如果 k == 0 ，将第 i 个数字用 0 替换。
// 由于 code 是循环的， code[n-1] 下一个元素是 code[0] ，且 code[0] 前一个元素是 code[n-1] 。

// 给你 循环 数组 code 和整数密钥 k ，请你返回解密后的结果来拆除炸弹！

export function decrypt(code: number[], k: number): number[] {
    const len = code.length
    const answer: number[] = new Array(len);
    answer.fill(0)
    if (k === 0) {
        return answer
    }

    for (let i = 0; i < answer.length; i++) {
        let count = 0
        let kk = Math.abs(k)
        let j = 0
        while (j++ < kk) {
            let index
            if (k > 0) {
                index = i + j
            } else if (k < 0) {
                index = i - j
            }
            if (index > len - 1) {
                index = Math.abs(index - len)
            } else if (index < 0) {
                index = len + index
            }
            count += code[index]
        }
        answer[i] = count
    }
    return answer
};