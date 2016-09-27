import React from 'react'
import ArrowSwoosh from 'react-icons/lib/md/redo'
import _ from 'lodash'

import * as Content from './slides'

import {
  Appear,
  BlockQuote,
  Cite,
  Code,
  CodePane,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  Quote,
  Slide,
  Spectacle,
  Text
} from 'spectacle'

import preloader from 'spectacle/lib/utils/preloader'
import createTheme from 'spectacle/lib/themes/default'

require('normalize.css')
require('spectacle/lib/themes/default/index.css')

const images = {
  life1: require('../assets/code-1.png'),
  life2: require('../assets/code-2.png'),
  life3: require('../assets/code-3.png'),
  life4: require('../assets/code-4.png'),
  life5: require('../assets/code-5.png'),
  life6: require('../assets/life-6.png')
}

preloader(images)

const theme = createTheme({
  primary: "#ffa740"
})

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck>
          <Slide>
            <Content.Title />
          </Slide>
          <Slide transition={["fade"]} bgColor="primary">
            <Content.Bio />
          </Slide>
          <Slide transition={["fade"]} bgColor="primary">
            <Heading textColor="black">
              Reactive Programming
            </Heading>
          </Slide>

          {/* These go together */}
          <Slide transition={["fade"]} bgColor="primary">
            <Content.ReactiveHighLevel />
          </Slide>


          <Slide>
            <div style={{ display: 'flex', flexDirection: `column`, alignItems: `center` }}>
              <Heading textSize={`4rem`} margin={`0rem 0rem 4rem 0rem`} textColor="black">
                Popular Triggers:
              </Heading>
              <Code bgColor="transparent" textSize="2.2rem">
                {`$scope.meaningOfTheUniverse = 42`}
              </Code>
              <br />
              <Code bgColor="transparent" textSize="2rem">
                {`this.setState({ meaningOfTheUniverse: 42 })`}
              </Code>
              <br />
              <Code bgColor="transparent" textSize="2.2rem">
                {`dispatch(setMeaningOfTheUniverse(42))`}
              </Code>
            </div>
          </Slide>

          <Slide transition={["fade"]} bgColor="primary">
            <Content.ReactiveAssumptionPreview />
          </Slide>

          <Slide transition={["fade"]} bgColor="primary">
            <Content.ReactiveAssumption />
          </Slide>

          <Slide transition={["fade"]} bgColor="#282C34">
            <Image src={images.life1.replace("/", "")} />
          </Slide>
          <Slide bgColor="#282C34">
            <Image src={images.life2.replace("/", "")} />
          </Slide>
          <Slide bgColor="#282C34">
            <Image src={images.life3.replace("/", "")} />
          </Slide>
          <Slide bgColor="#282C34">
            <Image src={images.life4.replace("/", "")} />
          </Slide>
          <Slide bgColor="#282C34">
            <Image src={images.life5.replace("/", "")} />
          </Slide>
          <Slide bgColor="#282C34">
            <Image src={images.life6.replace("/", "")} />
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
