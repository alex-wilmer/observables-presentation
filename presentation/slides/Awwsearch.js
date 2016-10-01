import React, { Component } from 'react'
import { Observable } from 'rxjs'

export default class App extends Component {
  constructor() {
    super()
    this.state = { text: '' }
  }

  componentDidMount() {
    let input$ =
      Observable.fromEvent(document.getElementById('input'), 'input')
        .map(event => event.target.value)

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
