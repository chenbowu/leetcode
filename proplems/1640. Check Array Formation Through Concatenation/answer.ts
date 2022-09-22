export function canFormArray(arr: number[], pieces: number[][]): boolean {
    for (let i = 0; i < pieces.length; i++) {
        const piece = pieces[i]
        let index = -1
        for (let j = 0; j < piece.length; j++) {
            const val = piece[j]
            if (index === -1) {
                index = arr.indexOf(val)
            }

            if (index === -1) {
                return false
            }

            if (arr[index] !== val) {
                return false
            }
            index++
        }
    }
    return true
};