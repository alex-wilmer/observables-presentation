function filter(predicate, Observable) {
  return Observer => {
    Observable({
      log: val => {
        if (predicate(val)) Observer.log(val)
      }
    })
  }
}

function map(mapper, Observable) {
  return Observer => {
    Observable({
      log: val => Observer.log(mapper(val))
    })
  }
}

function reduce(reducer, Observable) {
  return Observer => {
    let last = 0
    Observable({
      log: val => {
        last = val
        Observer.log(reducer(last, val))
      }
    })
  }
}

function addOne (x) {
  console.log('addOne: ', x)
  return x + 1
}

function odd (x) {
  console.log('odd: ', x)
  return x % 2 !== 0
}

function sum (x, y) {
  console.log('sum :', x + y)
  return x + y
}

let arr = [1, 2, 3, 4, 5]

let Observable = Observer => {
  arr.forEach(x => Observer.log(x))
}

let ModifiedObservable =
  reduce(sum, map(addOne, filter(odd, Observable)))

ModifiedObservable({
  log: x => console.log('finished! ', x)
})

> odd: 1
> addOne:  1
VM6116:42 sum : 4
VM6116:56 finished!  4
VM6116:37 odd:  2
VM6116:37 odd:  3
VM6116:32 addOne:  3
VM6116:42 sum : 8
VM6116:56 finished!  8
VM6116:37 odd:  4
VM6116:37 odd:  5
VM6116:32 addOne:  5
VM6116:42 sum : 12
VM6116:56 finished!  12
