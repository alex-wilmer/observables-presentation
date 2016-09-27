import React from 'react'
import ArrowSwoosh from 'react-icons/lib/md/redo'

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

export default () =>
<div>
  <Text textSize="2.5em" margin={`0rem 0rem 6rem 0rem`}>Reactive Programming</Text>
  <Layout>
    <Fill>
      <Text textSize="3rem" bold>An event occurs!</Text>
      <Appear><Text textSize="2.5rem">(user clicks a button)</Text></Appear>
    </Fill>
    <Appear>
      <Fill>
        <Text textSize={`2.2rem`}>triggers</Text>
        <Code textSize={`3rem`} bgColor="transparent">-----></Code>
      </Fill>
    </Appear>
    <Fill>
      <Appear><Text textSize="3rem" bold>Another Event</Text></Appear>
      <Appear><Text textSize="2.5rem">(callback function that updates the DOM)</Text></Appear>
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
</div>
