function map (fn, Observable) {
  return Observer => {
    return Observable({
      getMessage(msg) { Observer.getMessage(fn(msg)) }
    })
  }
}

function MarketingMessage (You) {
  setInterval(() => You.getMessage(`blahblahblah`), 1000)
}

let ExcitedManager         = map(msg => `${msg}!!`, MarketingMessage)
let ManagerJustGotDivorced = map(msg => `${msg}...`, MarketingMessage)

function merge (...Observables) {
  return Observer => {
    Observables.forEach(ob => {
      ob({ getMessage: msg => Observer.getMessage(msg) })
    })
  }
}

let MarketingChaos = merge(ExcitedManager, ManagerJustGotDivorced)

const You = {
  getMessage: msg => console.log(`${msg}. Okay!`)
}

MarketingChaos(You)
