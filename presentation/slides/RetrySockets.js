import React, { Component } from 'react'
import { Observable, Scheduler } from 'rxjs'

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      numPlayers: 0,
      text: '',
    }
  }

  componentDidMount() {
    this.connection$ = Observable.create(observer => {
      this.socket = new WebSocket('ws://localhost:5000/casino')
      observer.next(this.socket)
      return () => this.socket.close()
    })

    let pong$ = Observable.interval(1000)
      .flatMap(() => Observable.fromPromise(
        fetch('http://localhost:5000')
          .then(res => 'pong')
          .catch(err => {
            this.setState({ serverDown: true })
            throw new Error('server is down!')
          })
      ))

    let message$ = this.connection$
      .flatMap(socket => Observable.create(observer =>
        socket.onmessage = event => observer.next(event))
      )
      .map(event => JSON.parse(event.data))

    this.socketSubscription = message$
      .merge(pong$)
      .retryWhen(errors => errors)
      .do(() => this.setState({ serverDown: false }))
      .filter(msg => !msg || msg !== 'pong')
      .subscribe(
        msg => {
          switch (msg.type) {
            case 'newPlayer': {
              console.log('player joined', msg.numPlayers)
              this.setState({ numPlayers: msg.numPlayers })
              break
            }
            case 'gameover': {
              this.setState({ gameover: true })
            }
          }
        },
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
      () => {
        this.socket.send(JSON.stringify({ type: `win` }))
        this.setState({ winner: true, text:
          <span>
            <div>{this.state.text}</div>
            <div>We have a winner!</div>
          </span> })
      }
    )
  }

  render() {
    return (
      <div>
       {this.state.serverDown &&
         <div style={{color:`white`}}>
           The server is down! ⌛
         </div>
       }
        {this.state.numPlayers === 1 && !this.state.gameover && !this.state.serverDown &&
          <div style={{color: `white`}}>Waiting for a challenger!</div>
        }
        {this.state.numPlayers === 2 && !this.state.gameover && !this.state.serverDown &&
          <div>
            <div style={{color: `white`, marginBottom: `3rem`}}>Challenger has arrived!</div>
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
        }
        {this.state.gameover && !this.state.winner && !this.state.serverDown &&
          <div style={{color:`white`}}>You lose all your money!</div>
        }

        {this.state.winner && !this.state.serverDown &&
          <div style={{ color: `white`, marginTop: `2rem` }}>
            {this.state.text}
          </div>
        }
      </div>
    )
  }

}
