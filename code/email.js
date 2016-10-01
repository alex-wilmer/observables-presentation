function EmailInbox (You) {
  You.receiveEmail({ from: 'Boss',            subject: `You're fired!` })
  You.receiveEmail({ from: 'Manager',         subject: `You're slacking!` })
  You.receiveEmail({ from: 'Nigerian Prince', subject: `You're rich!` })
}

const You = {
  receiveEmail: email => console.log(`Reading: ${email.subject}`)
}

function filter(predicate, Observable) {
  return Observer => {
    Observable({
      receiveEmail: email => {
        if (predicate(email)) Observer.receiveEmail(email)
      }
    })
  }
}

function map(mapper, Observable) {
  return Observer => {
    Observable({
      receiveEmail: email => Observer.receiveEmail(mapper(email))
    })
  }
}

function delay(ms, Observable) {
  return Observer => {
    Observable({
      receiveEmail: email => setTimeout(() => Observer.receiveEmail(email), ms)
    })
  }
}

let StressFreeEmails = filter(email => email.from !== 'Boss', EmailInbox)
let FantasticEmails = map(email => ({
  from: email.from,
  subject: email.subject.replace('slacking', 'doing a fantastic job')
}), StressFreeEmails)
let WhenIActuallyGetAroundToReadingMyEmails = delay(100000000, FantasticEmails)

WhenIActuallyGetAroundToReadingMyEmails(You)
