import React from 'react'

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
  Slide,
  Text
} from "spectacle";

export default () =>
  <div>
    <Layout>
      <Fill>
        <Text textSize={`6rem`} margin="2rem 0rem" textColor="white">
          Alex Wilmer
        </Text>
        <Text textSize={`2.5rem`} bold margin="2rem 0rem" textColor="white">
          @benevolentNinja
        </Text>
        <Text textSize={`2.5rem`} bold margin="2rem 0rem" textColor="white">
          github.com/alex-wilmer
        </Text>
      </Fill>
      <Fill>
        <List>
          <ListItem textSize={`2.2rem`} textColor="white">
            Started with Flash
          </ListItem>
          <ListItem textSize={`2.2rem`} textColor="white">
            Learned OOP Java / Python
          </ListItem>
          <ListItem textSize={`2.2rem`} textColor="white">
            First professional job: .NET dev
          </ListItem>
          <ListItem textSize={`2.2rem`} textColor="white">
            Fell deeply in {`<3`} with JavaScript
          </ListItem>
          <ListItem textSize={`2.2rem`} textColor="white">
            Work full time at OICR
          </ListItem>
          <ListItem textSize={`2.2rem`} textColor="white">
            Mentor at Lighthouse Labs
          </ListItem>
          <ListItem textSize={`2.2rem`} textColor="white">
            Co-founder of phrase.fm
          </ListItem>
        </List>
      </Fill>
    </Layout>
    <List>
      <ListItem textSize={`3rem`} textColor="white">
        Spends way too much time on stackoverflow
      </ListItem>
    </List>
  </div>
