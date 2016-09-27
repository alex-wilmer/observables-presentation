import React from 'react'
import ArrowSwoosh from 'react-icons/lib/md/redo'

import * as Content from './slides'

// Import Spectacle Core tags
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

console.log(Content)

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
          <Slide transition={["fade"]} bgColor="primary">
            <Layout>
              <Fill>
                <Text textSize="3rem" bold>Some Event</Text>
                <Appear><Text textSize="2.5rem">(user clicks a button)</Text></Appear>
              </Fill>
              <Appear>
                <Fill>
                  <Code textSize={`3rem`} bgColor="transparent">-----></Code>
                </Fill>
              </Appear>
              <Fill>
                <Appear><Text textSize="3rem" bold>Another Event</Text></Appear>
                <Appear><Text textSize="2.5rem">(update DOM)</Text></Appear>
              </Fill>
            </Layout>
            <Appear>
              <Layout>
                <Fill>
                  <Text>
                    <ArrowSwoosh
                      style={{
                        transform: `rotate(180deg)`,
                        fontSize: `10rem`
                      }}
                    />
                  </Text>
                  <Text textSize={`2.5rem`}>
                    View is <strong>observing</strong> button click
                  </Text>
                </Fill>
              </Layout>
            </Appear>
          </Slide>
          <Slide transition={["fade"]} bgColor="primary">
            <Layout>
              <Fill>
                <Text textSize="3rem" bold>Some Event</Text>
                <Text textSize="2.5rem">(user clicks a button)</Text>
              </Fill>
              <Fill>
                <Code textSize={`3rem`} bgColor="transparent">-----></Code>
              </Fill>
              <Fill>
                <Text textSize="3rem" bold>Another Event</Text>
                <Text textSize="2.5rem">(update DOM)</Text>
              </Fill>
            </Layout>
            <Layout>
              <Fill>
                <Text>
                  <ArrowSwoosh
                    style={{
                      transform: `rotate(180deg)`,
                      fontSize: `10rem`
                    }}
                  />
                </Text>
                <Text textSize={`2.5rem`}>
                  View is <strong>observing</strong> button click
                </Text>
              </Fill>
            </Layout>
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
