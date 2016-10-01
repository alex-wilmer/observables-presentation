import React, { Component } from 'react'
import { Observable } from 'rxjs'

export default class App extends Component {
  constructor() {
    super()
    this.state = { images: '' }
  }

  componentDidMount() {
    let input$ =
      Observable.fromEvent(document.getElementById('input'), 'input')
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

    input$.subscribe(img => {
      this.setState({ images: [img, ...this.state.images] })
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

        <h2 style={{ color: `white` }}>&nbsp; {this.state.images}</h2>
      </div>
    )
  }

}
