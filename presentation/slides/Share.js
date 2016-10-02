import React, { Component } from 'react'
import { Observable, Scheduler } from 'rxjs'

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      timer1: '',
      timer2: '',
    }
  }

  componentDidMount() {
    let timer$ = Observable.interval(1000)
    timer$.subscribe(val => this.setState({ timer1: val }))

    setTimeout(() => {
      let subscription = timer$.subscribe(val => this.setState({ timer2: val }))
      setTimeout(() => subscription.unsubscribe(), 5000)
    }, 2000)

  }

  render() {
    return (
      <div style={{color:`white`, opacity: this.props.hide ? 0 : 1}}>
        <div style={{ fontSize: `2.6rem` }}>First Subscription:  {this.state.timer1}</div>
        <div style={{ fontSize: `2.6rem` }}>Second Subscription:  {this.state.timer2}</div>
      </div>
    )
  }

}
