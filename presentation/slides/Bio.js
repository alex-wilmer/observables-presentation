import React from 'react'

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
} from "spectacle";

export default () =>
  <div>
    <Layout>
      <Fill>
        <Text textSize={`6rem`} margin="2rem 0rem">
          Alex Wilmer
        </Text>
        <Text textSize={`2.5rem`} bold margin="2rem 0rem">
          @benevolentNinja
        </Text>
        <Text textSize={`2.5rem`} bold margin="2rem 0rem">
          github.com/alex-wilmer
        </Text>
      </Fill>
      <Fill>
        <List>
          <ListItem textSize={`2.2rem`}>
            Started with Flash
          </ListItem>
          <ListItem textSize={`2.2rem`}>
            Learned OOP Java / Python
          </ListItem>
          <ListItem textSize={`2.2rem`}>
            First professional job: .NET dev
          </ListItem>
          <ListItem textSize={`2.2rem`}>
            Fell deeply in {`<3`} with JavaScript
          </ListItem>
          <ListItem textSize={`2.2rem`}>
            Work full time at OICR
          </ListItem>
          <ListItem textSize={`2.2rem`}>
            Mentor at Lighthouse Labs
          </ListItem>
          <ListItem textSize={`2.2rem`}>
            Co-founder of phrase.fm
          </ListItem>
        </List>
      </Fill>
    </Layout>
    <Appear>
      <List>
        <ListItem textSize={`3rem`}>
          Spends way too much time on stackoverflow
        </ListItem>
      </List>
    </Appear>
  </div>
