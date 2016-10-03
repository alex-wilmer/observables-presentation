// 1

function MorningAlarm (You) {
  setInterval(() => {
    console.log('bring bring!')
    You.hearTheMorningAlarm()
  }, 1000)
}

const You = {
  hearTheMorningAlarm: () => console.log('ZZzzzz..')
}

MorningAlarm(You)

// 2

function MorningAlarm (You) {
  let id, numberOfBrings = 0

  function startAlarm () {
    id = setInterval(() => {
      console.log('bring bring!')
      You.hearTheMorningAlarm(numberofBrings++)
    }, 1000)
  }

  startAlarm()

  return () => {
    numberOfBrings = 0
    clearInterval(id)
    setTimeout(startAlarm, 5000)
  }
}

const You = {
  hearTheMorningAlarm: numberOfBrings => {
    if (numberOfBrings > 3) You.hitSnooze()
    else console.log('ZZzzz..')
  }
}

You.hitSnooze = MorningAlarm(You)

// 3

function MorningAlarm (You) {
  let id, numberOfBrings = 0, snoozeCount = 0

  function startAlarm () {
    id = setInterval(() => {
      console.log('bring bring!')
      You.hearTheMorningAlarm(numberofBrings++, snoozeCount)
    }, 1000)
  }

  startAlarm()

  return {
    hitSnooze() {
      numberOfBrings = 0
      snoozeCount++
      clearInterval(id)
      setTimeout(startAlarm, 5000)
    },
    hitDismiss() {
      clearInterval(id)
      You.shouldProbablyGetUpNow()
    }
  }
}

const You = {
  hearTheMorningAlarm: (numberOfBrings, snoozeCount) => {
    if (snoozeCount > 3) You.alarmActions.hitDismiss()
    if (numberOfBrings > 3) You.alarmActions.hitSnooze()
    else console.log('ZZzzz..')
  },
  shouldProbablyGetUpNow: () => console.log(`Okay, okay.. I'm getting up`)
}

You.alarmActions = MorningAlarm(You)

// 4

function MorningAlarm (You) {
  let id, numberOfBrings = 0, snoozeCount = 0, dismissed = false

  function startAlarm () {
    id = setInterval(() => {
      if (!dismissed) {
        console.log('bring bring!')
        You.hearTheMorningAlarm(numberofBrings++, snoozeCount)
      }
    }, 1000)
  }

  startAlarm()

  return {
    hitSnooze() {
      numberOfBrings = 0
      snoozeCount++
      clearInterval(id)
      setTimeout(startAlarm, 5000)
    },
    hitDismiss() {
      dismissed = true
      clearInterval(id)
      You.shouldProbablyGetUpNow()
    }
  }
}
