// Import React
import React from "react";
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
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  city: require("../assets/city.jpg"),
  kat: require("../assets/kat.png"),
  logo: require("../assets/formidable-logo.svg"),
  markdown: require("../assets/markdown.png")
};

preloader(images);

const theme = createTheme({
  primary: "#ffa740"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["zoom", "slide"]} transitionDuration={500}>
          <Slide transition={["fade"]} bgColor="primary">
            <Heading size={1} fit lineHeight={1} textColor="black">
              Observables:
            </Heading>
            <Text textSize={`6rem`} margin="2rem 0rem">
              Powerful Tools for Async
            </Text>
            <Code bgColor="transparent" textSize={`3rem`}>
              ---o---o--x--|-->
            </Code>
          </Slide>
          <Slide transition={["fade"]} bgColor="primary">
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
        </Deck>
      </Spectacle>
    );
  }
}
