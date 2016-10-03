import React, { Component } from 'react'
import { Observable, Scheduler } from 'rxjs'

export default class App extends Component {
  constructor() {
    super()
    this.state = { text: '' }
  }

  componentDidMount() {
    this.connection$ = Observable.create(observer => {
      let socket = new WebSocket('ws://localhost:5000/casino')
      observer.next(socket)
      return () => socket.close()
    })

    let pong$ = Observable.interval(1000)
      .flatMap(() => Observable.fromPromise(
        fetch('http://localhost:5000')
          .then(res => 'pong')
          .catch(err => {
            return Observable.throw(new Error(err))
          })
      ))

    let message$ = this.connection$
      .flatMap(socket => Observable.create(observer =>
        socket.onmessage = event => observer.next(event))
      )
      .map(event => JSON.parse(event.data))

    let newPlayer$ = message$.filter(msg => msg.type === `newPlayer`)

    this.socketSubscription = newPlayer$.filter(msg => msg.type === `newPlayer`)
      .merge(pong$)
      .retryWhen(errors => errors)
      .filter(msg => !msg || msg !== 'pong')
      .subscribe(
        msg => console.log('player joined', msg.numPlayers),
        err => console.log('err', err.message)
      )
  }

  componentWillUnmount() {
    this.socketSubscription.unsubscribe()
  }

  gamble() {
    let $ =
      Observable.of(1, 2, 3, 4, 5, Scheduler.asap)
        .map(x => {
          if (Math.random() > 0.5) throw Error(`Better luck next time!`)
          else return x
        } )
        .retry(5)

    $.subscribe(
      val => {
        this.setState({ text:
          val === 1 ?
            <span>
              {this.state.text && <div>{this.state.text}</div>}
              <span>{val}</span>
            </span> :
            <span>{this.state.text}, {val}</span>
        })
      },
      err => this.setState({ text:
        <span>
          <div>{this.state.text}</div>
          <div>{err.message}</div>
        </span>
      }),
      () => this.setState({ text:
        <span>
          <div>{this.state.text}</div>
          <div>We have a winner!</div>
        </span> })
    )
  }

  render() {
    return (
      <div>
        <button
          style={{
            backgroundColor: `rgb(228, 163, 37)`,
            color: `black`,
            border: `none`,
            borderRadius: `5px`,
            outline: `none`,
          }}
          onClick={() => {
          this.setState({ text: `` })
          this.gamble();
        }}><b>Gamble</b></button>

        <br />

        <div style={{ color: `white`, marginTop: `2rem` }}>
          {this.state.text}
        </div>
      </div>
    )
  }

}
