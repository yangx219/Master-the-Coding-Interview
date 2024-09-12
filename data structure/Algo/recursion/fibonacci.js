// Given a number N return the index value of the Fibonacci sequence, where the sequence is:

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ...
// the pattern of the sequence is that each value is the sum of the 2 previous values, that means that for N=5 → 2+3

//For example: fibonacciRecursive(6) should return 8


function fibonacciIterative(n){
    let fi = [];
    for(let i = 0; i <= n; i++){
        if(i === 0 || i === 1){
            fi.push(i);
            console.log(fi[i])
        }else{
            fi.push(fi[i-1]+fi[i-2]);
            console.log(fi[i])
        }

    }
    return fi[n];
    

}


function fibonacciRecursive(n) {
    if(n<2){
        return n;
    }else{
        return fibonacciRecursive(n-1)+fibonacciRecursive(n-2);
    }
  
}

console.log(fibonacciIterative(6));
console.log(fibonacciRecursive(6));