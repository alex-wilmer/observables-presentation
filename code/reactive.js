let a = 1, b = 2
let x = a + b
console.log(x)

document.getElementById('btn').onclick = () => {
  a++
  x = a + b
  console.log(x)
}

import { Observable } from 'rxjs'

let b$ = Observable.of(2)

let a$ = Observable.create(observer => {
  let a = 1
  observer.next(a)

  document.getElementById('btn').onclick = () => {
    a++
    observer.next(a)
  }
})

let x$ = Observable.combineLatest(a$, b$, (x, y) => x + y)
x$.subscribe(val => console.log(val))
