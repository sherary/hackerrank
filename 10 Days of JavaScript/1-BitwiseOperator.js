//problem statement see https://www.hackerrank.com/challenges/js10-bitwise/problem

const bitsOp = (n, k) => {
    let max = 0
    for (let i = 0; i <= n; i++) {
        for (let j = i + 1; j <= n; j++) {
            const x = i & j;
            if (x > max && x < k) {
                max = x
            }
        }
    }
    return max;
}

console.log(bitsOp(5, 2))
console.log(bitsOp(8, 5))
console.log(bitsOp(2, 2))