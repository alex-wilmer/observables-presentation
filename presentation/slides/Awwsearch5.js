import React, { Component } from 'react'
import { Observable } from 'rxjs'

export default class App extends Component {
  constructor() {
    super()
    this.state = { images: '' }
  }

  componentDidMount() {
    let input$ = Observable.fromEvent(document.getElementById('input'), 'input')

    let image$ = input$
      .map(event => event.target.value)
      .filter(value => value.length > 2)
      .debounce(() => Observable.interval(500))
      .flatMap(val => Observable.fromPromise(
        fetch(`https://www.reddit.com/r/aww/search.json?q=${val}&restrict_sr=on`)
          .then(res => res.json())
      ))
      .flatMap(val => Observable.from(val.data.children))
      .distinct((a, b) => a.data.id === b.data.id)
      .map(val => <img key={val.data.id} src={val.data.thumbnail} />)

    let loading$ = input$.map(() => false)
    let appState$ = Observable.merge(loading$, image$)

    appState$.subscribe(state => {
      if (!state) this.setState({ loading: true })
      else this.setState({
        loading: false,
        images: [state, ...this.state.images]
      })
    })
  }

  render() {
    return (
      <div>
        <div style={{ display: `flex`, marginLeft: `2rem` }}>
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
          <span
            style={{
              opacity: this.state.loading ? 1 : 0,
              transition: `opacity 0.3s ease`,
              fontSize: `3rem`,
            }}
          >⌛</span>
        </div>

        <br />

        <div style={{
          color: `white`,
          opacity: this.state.loading ? 0.35 : 1,
          transition: `opacity 0.3s ease`,
        }}>&nbsp; {this.state.images}</div>
      </div>
    )
  }

}
