// 给你一个日志数组 logs。每条日志都是以空格分隔的字串，其第一个字为字母与数字混合的 标识符 。

// 有两种不同类型的日志：

// 字母日志：除标识符之外，所有字均由小写字母组成
// 数字日志：除标识符之外，所有字均由数字组成
// 请按下述规则将日志重新排序：

// 所有 字母日志 都排在 数字日志 之前。
// 字母日志 在内容不同时，忽略标识符后，按内容字母顺序排序；在内容相同时，按标识符排序。
// 数字日志 应该保留原来的相对顺序。
// 返回日志的最终顺序。

// 输入：logs = ["dig1 8 1 5 1","let1 art can","dig2 3 6","let2 own kit dig","let3 art zero"]
// 输出：["let1 art can","let3 art zero","let2 own kit dig","dig1 8 1 5 1","dig2 3 6"]
// 解释：
// 字母日志的内容都不同，所以顺序为 "art can", "art zero", "own kit dig" 。
// 数字日志保留原来的相对顺序 "dig1 8 1 5 1", "dig2 3 6" 。

var reorderLogFiles = function(logs) {
    const length = logs.length;
    // 初始化一个存放日志内容与索引的字典
    const arr = new Array(length).fill(0);
    for (let i = 0; i < length; i++) {
        arr[i] = [logs[i], i];
    }
    arr.sort((a, b) => logCompare(a, b));
    const reordered = arr.map(i => i[0]);
    // const reordered = new Array(length).fill(0);
    // for (let i = 0; i < length; i++) {
    //     reordered[i] = arr[i][0];
    // }
    return reordered;
}

const logCompare = (log1, log2) => {
    // log [日志内容, 原数组中的下标]
    // split [标识符,日志内容]
    const split1 = split(log1[0], " ");
    const split2 = split(log2[0], " ");
    // 题意:
    // 字母日志：除标识符之外，所有字均由小写字母组成
    // 数字日志：除标识符之外，所有字均由数字组成
    // 根据题意我们可以取日志内容的第一个字符判断日志类型，
    const isDigit1 = isDigit(split1[1][0]);
    const isDigit2 = isDigit(split2[1][0]);
    // 当两个都是数字日志时，通过索引，进行正常的升序排序。
    if (isDigit1 && isDigit2) {
        return log1[1] - log2[1];
    }
    // 当两个都是字符串, 通过日志内容进行比较排序。
    if (!isDigit1 && !isDigit2) {
        // 先通过标识符进行比较
        const sc = compareTo(split1[1], split2[1]);
        // 如果标识符相同，则进行内容比较
        if (sc !== 0) {
            return sc;
        }
        // 通过内容进行比较
        return compareTo(split1[0], split2[0]);
    }
    return isDigit1 ? 1 : -1;
};

const isDigit = (ch) => {
    return parseFloat(ch).toString() === "NaN" ? false : true;
}

const compareTo = (left, right) => {
    for (let i = 0; i < Math.min(left.length, right.length); i++) {
        // 通过 ASCII 码进行比较
        if (left[i].charCodeAt() < right[i].charCodeAt()) {
            return -1;
        }
        if (left[i].charCodeAt() > right[i].charCodeAt()) {
            return 1;
        }
    }
    if (left.length === right.length) {
        return 0;
    }
    if (left.length > right.length) {
        return 1;
    }
    return -1;
}
/**
 * 文本分割
 * @param {*} str 
 * @param {*} separator 
 * @returns 返回[标识符,日志内容]
 */
const split = (str, separator) => {
    const firstItem = str.split(separator)[0];
    const ret = [firstItem];
    const index = str.indexOf(" ");
    ret.push(str.slice(index + 1, str.length));
    return ret;
}


var logs = ["dig1 8 1 5 1", "let1 art can", "dig2 3 6", "let2 own kit dig", "let3 art zero"];
var ans = reorderLogFiles(logs);
console.log(ans);