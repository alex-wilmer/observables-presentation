import React, { Component } from 'react'
import { Observable, ReplaySubject } from 'rxjs'

export default class App extends Component {
  constructor() {
    super()
    this.state = { text: '' }
  }

  componentDidMount() {
    let timer$ = Observable.interval(10)

    input$.subscribe(text => {
      this.setState({ text })
    })
  }

  render() {
    return (
      <div>
        <input
          style={{
            backgroundColor: `transparent`,
            border: `transparent`,
            borderBottom: `1px solid white`,
            outline: `none`,
            color: `white`,
          }}
          id="input"
          type="text"
        />

        <br />

        <h2 style={{ color: `white` }}>&nbsp; {this.state.text}</h2>
      </div>
    )
  }

}
