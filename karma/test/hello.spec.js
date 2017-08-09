describe('greeter', function(){
  it('should say Hello to someone', function(){
    expect(greet('Ayo')).toEqual('Hello, Ayo');
  });

  it('should not greet an undefined person', function(){
    expect(greet()).toEqual(undefined);
  })
})

describe('addOne', function(){
  it('myNum should start at 0', function(){
    expect(myNum).toEqual(0);
  });

  it('should add 1 to myNum', function(){
    addOne()
    expect(myNum).toEqual(1);
  })
})

describe('evenOrOdd', function(){
  it('should return odd for 1', function(){
    expect(evenOrOdd(1)).toEqual("odd")
  })

  it('should return even for 2', function(){
    expect(evenOrOdd(2)).toEqual("even")
  })
})

describe('fizzBuzz', function(){
  it('should return fizz for 3', function(){
    expect(fizzBuzz(3)).toEqual("fizz");
  })

  it('should return fizz for 6', function(){
    expect(fizzBuzz(6)).toEqual("fizz");
  })

  it('should return fizz for 33', function(){
    expect(fizzBuzz(33)).toEqual("fizz");
  })

  it('should return buzz for 5', function(){
    expect(fizzBuzz(5)).toEqual("buzz");
  })

  it('should return buzz for 1000', function(){
    expect(fizzBuzz(1000)).toEqual("buzz");
  })

  it('should return fizzbuzz for 15', function(){
    expect(fizzBuzz(15)).toEqual("fizzbuzz");
  })

  it('should return fizzbuzz for 3000', function(){
    expect(fizzBuzz(3000)).toEqual("fizzbuzz");
  })

  it('should return buzz for 100000000000', function(){
    expect(fizzBuzz(100000000000)).toEqual("buzz");
  })
})
