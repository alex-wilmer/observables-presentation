

let thought$ = Observable.merge(
  touch$,
  vision$,
  hearing$,
  taste$,
  smell$,
  balance$,
)

thought$.subscribe(You)
