function fizzBuzz(n) {
    // Write your code here
    let m = [];
    for (let i = 1; i <= n; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            m.push('FizzBuzz')
        } else if (i % 3 == 0) {
            m.push('Fizz')
        } else if (i % 5 == 0) {
            m.push('Buzz')
        } else {
            m.push(i)
        }
    }
    
    m.forEach(el => {
        console.log(el)
    })

}
fizzBuzz(15)
// console.log(fizzBuzz(15))1