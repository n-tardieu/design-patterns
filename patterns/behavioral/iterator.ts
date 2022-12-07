const range = (start: number, end: number) => {
    let current = start;
    return {
        next() {
            if (current < end) {
                const result = { done: false, value: current }
                current++
                return result
            }
            return { done: true, value: end }
        }
    }
}

const iterator = range(1, 10)
let result = iterator.next()
while (!result.done) {
    console.log(result.value);
    result = iterator.next()
}

console.log("res :", result);


