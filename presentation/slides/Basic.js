import React, { Component } from 'react'
import { Observable, Scheduler } from 'rxjs'

export default class App extends Component {
  constructor() {
    super()
    this.state = { text: <div key="first"/> }
  }

  componentDidMount() {
    Observable.range(0, 5, Scheduler.asap)
      .subscribe(
        val => this.setState({ text: [...this.state.text, <pre style={{textAlign: `left`}} key={val}>{`>   ${val}`}</pre>] }),
        err => this.setState({ text: [...this.state.text, <pre style={{textAlign: `left`}} key={err}>{`>   ${err}`}</pre>] }),
        () => this.setState({ text: [...this.state.text, <pre style={{textAlign: `left`}} key="done!">{`>   done!`}</pre>] })
      )
  }

  render() {
    return <div style={{color:`white`, opacity: this.props.hide ? 0 : 1}}>{this.state.text}</div>
  }

}
