import React, { Component } from 'react'
import { Observable, Scheduler } from 'rxjs'

export default class App extends Component {
  constructor() {
    super()
    this.state = { text: '' }
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
