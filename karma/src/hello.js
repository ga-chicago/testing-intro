var myNum = 0;

function greet(name){
  if(name){
    return "Hello, " + name
  }else{
    return undefined;
  }
}

function addOne(){
  myNum += 1;
}

function evenOrOdd(num){
  if(num % 2 != 0){
    return "odd"
  }else{
    return "even"
  }
}

function fizzBuzz(num){
  if(num % 3 === 0 && num % 5 === 0){
    return "fizzbuzz"
  }
  else if(num % 5 === 0){
    return "buzz"
  }else if(num % 3 === 0){
    return "fizz"
  }
}
