import React from 'react'
import ArrowSwoosh from 'react-icons/lib/md/redo'

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
      <Text textSize="2.5rem">(user clicks a button)</Text>
      <Heading textSize="3.5rem" margin={`1rem 0rem`}>User</Heading>
    </Fill>
    <Fill>
      <Text textSize={`2.2rem`}>triggers</Text>
      <Code textSize={`3rem`} bgColor="transparent">-----></Code>
      <Heading textSize="3.5rem" margin={`1rem 0rem`}>Updates</Heading>
    </Fill>
    <Fill>
      <Text textSize="3rem" bold>Another Event</Text>
      <Text textSize="2.5rem">(callback function that updates the DOM)</Text>
      <Heading textSize="3.5rem" margin={`1rem 0rem`}>View</Heading>
    </Fill>
  </Layout>

  <Appear>
    <Layout>
      <Fill>
        <div style={{ marginTop: `-2rem` }}>
          <Text>
            <ArrowSwoosh
              style={{
                transform: `rotate(180deg)`,
                fontSize: `10rem`
              }}
            />
          </Text>
          <Text textSize={`4rem`}>
            View is <strong>observing</strong> the user
          </Text>
        </div>
      </Fill>
    </Layout>
  </Appear>
</div>
