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
console.log('finished! ', arr.filter(odd).map(addOne).reduce(sum))

// create an array
> odd:  1
> odd:  2
> odd:  3
> odd:  4
> odd:  5
// create an array
> addOne:  1
> addOne:  3
> addOne:  5
// create an array
> sum : 6
> sum : 12
> finished!  12
