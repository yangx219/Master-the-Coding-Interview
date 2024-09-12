// Write two functions that finds the factorial of any number. One should use recursive, the other should just use a for loop

function findFactorialRecursive(number) {
    //code here
    if(number === 2){
      return 2;
    }else{
      return number*findFactorialRecursive(number-1);
    }
    
  }
  
  function findFactorialIterative(number) {
    //code here
    let answer = number;
    while(number>1){
      answer = answer*(number-1);
      number--;
    }
    return answer;
  }
  
  console.log(findFactorialIterative(5));
  console.log(findFactorialRecursive(5));