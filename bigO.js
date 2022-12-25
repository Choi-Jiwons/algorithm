function addUpTo1(n) {
    let total = 0;
    for (let i = 1; i <= n; i++)
        total += i;

        return total;
}

function addUpTo2 (n) {
    return n * (n+1) / 2;
}

let t1 = performance.now();
addUpTo1*(1000000000)
let t2 = performance.now();

console.log(`titme : ${(t2 - t1) / 1000} sec.`);