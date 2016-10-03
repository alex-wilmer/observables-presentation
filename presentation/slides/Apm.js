import React, { Component } from 'react'
import { Observable } from 'rxjs'

export default class App extends Component {
  constructor() {
    super()
    this.state = { text: '' }
  }

  componentDidMount() {
    let button = document.querySelector('#button')
    let click$ = Observable.fromEvent(button, 'click')

    let multiClick$ = click$
      .bufferWhen(() => click$.delay(500))
      .map(list => list.length)

    multiClick$.subscribe(numclicks => {
      console.log(numclicks)
      this.setState({ text: `${numclicks}x click`})
    })

    multiClick$
      .debounce(() => Observable.interval(1000))
      .subscribe(() => this.setState({ text: '' }))
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
          id='button'>Click me!</button>
        <br />
        <div style={{color: `white`, marginTop: `2rem`}}>
          {this.state.text}
        </div>
      </div>
    )
  }

}
