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
  Fit,
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
  life1: require('../assets/take2/YouLife1.png'),
  life2: require('../assets/take2/YouLife2.png'),
  life3: require('../assets/take2/YouLife3.png'),
  life4: require('../assets/take2/YouLife4.png'),
  life5: require('../assets/take2/YouLife5.png'),
  life6: require('../assets/take2/YouLife6.png'),
  life7: require('../assets/take2/YouLife7.png'),
  life8: require('../assets/take2/YouLife8.png'),
  life9: require('../assets/take2/YouLife9.png'),
  life10: require('../assets/take2/YouLife10.png'),
  life11: require('../assets/take2/YouLife11.png'),
  life12: require('../assets/take2/YouLife12.png'),
  life13: require('../assets/take2/YouLife13.png'),
  life14: require('../assets/take2/YouLife14.png'),

  alarmOb1: require('../assets/alarm/v2/ob1.png'),
  alarmOb2: require('../assets/alarm/v2/ob2.png'),
  alarmOb3: require('../assets/alarm/v2/ob3.png'),
  alarmOb4: require('../assets/alarm/v2/ob4.png'),
  alarmYou1: require('../assets/alarm/v2/you1.png'),
  alarmYou2: require('../assets/alarm/v2/you2.png'),
  alarmYou3: require('../assets/alarm/v2/you3.png'),

  you_and_life: require('../assets/you&life.png'),
  you: require('../assets/you.png'),
  wakeup: require('../assets/wake-up.jpg'),
  run_life: require('../assets/run_life.png'),
}

preloader(images)

const theme = createTheme({
  primary: "#ffa740"
})

let Row = ({ style, children }) =>
  <div style={{ display: `flex`, ...style }}>{children}</div>

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
            <Content.ReactiveHighLevel />
          </Slide>

          <Slide bgColor="#282C34" transition={["fade"]}>
            <div style={{ display: 'flex', flexDirection: `column`, alignItems: `center` }}>
              <Heading textSize={`4rem`} margin={`0rem 0rem 4rem 0rem`} textColor="white">
                Popular Triggers:
              </Heading>
              <Code bgColor="transparent" textSize="2.2rem" textColor="rgb(187, 205, 36)">
                {`$scope.meaningOfTheUniverse = 42`}
              </Code>
              <br />
              <Code bgColor="transparent" textSize="2rem"  textColor="rgb(187, 205, 36)">
                {`this.setState({ meaningOfTheUniverse: 42 })`}
              </Code>
              <br />
              <Code bgColor="transparent" textSize="2.2rem"  textColor="rgb(187, 205, 36)">
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

          <Slide transition={["fade"]} bgImage={images.you_and_life.replace("/", "")} bgDarken={0.25}>
            <Heading>&nbsp;</Heading>
            <Heading>You</Heading>
            <Heading>Observe</Heading>
            <Heading>Life</Heading>
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
          <Slide bgColor="#282C34">
            <Image src={images.life7.replace("/", "")} />
          </Slide>
          <Slide bgColor="#282C34">
            <Image src={images.life8.replace("/", "")} />
          </Slide>
          <Slide bgColor="#282C34">
            <Image src={images.life9.replace("/", "")} />
          </Slide>
          <Slide bgColor="#282C34">
            <Image src={images.life10.replace("/", "")} />
          </Slide>
          <Slide bgColor="#282C34">
            <Image src={images.life11.replace("/", "")} />
          </Slide>
          <Slide bgColor="#282C34">
            <Image src={images.life12.replace("/", "")} />
          </Slide>
          <Slide bgColor="#282C34">
            <Image src={images.life13.replace("/", "")} />
          </Slide>

          <Slide bgColor="#282C34">
            <Image src={images.life14.replace("/", "")} />
            <Appear>
              <div>
                <div style={{ position: `absolute`, right: 0, bottom: `20px`, textAlign: `left`, color: `white` }}>
                  <pre>{`> hit snooze`}</pre>
                  <pre>{`> ugh`}</pre>
                  <pre>{`> read reddit`}</pre>
                  <pre>{`> panic`}</pre>
                  <pre>{`> cry`}</pre>
                  <pre>{`> ZZzzz...`}</pre>
                </div>
              </div>
            </Appear>
          </Slide>

          <Slide bgColor="#282C34">
            <Image src={images.life14.replace("/", "")} />
            <Text textColor="white">
              <span
                style={{
                  position: `absolute`,
                  left: `232px`,
                  bottom: `70px`,
                }}
              >
                {`<-- subscribe function`}
              </span>
            </Text>
            <div style={{ position: `absolute`, right: 0, bottom: `20px`, textAlign: `left`, color: `white` }}>
              <pre>{`> hit snooze`}</pre>
              <pre>{`> ugh`}</pre>
              <pre>{`> read reddit`}</pre>
              <pre>{`> panic`}</pre>
              <pre>{`> cry`}</pre>
              <pre>{`> ZZzzz...`}</pre>
            </div>
          </Slide>

          <Slide bgImage={images.wakeup.replace("/", "")} bgDarken={0.25}>
            <Heading>&nbsp;</Heading>
            <Heading>You</Heading>
            <Heading>Observe</Heading>
            <Heading>Your Alarm Clock</Heading>
          </Slide>

          <Slide bgColor="#282C34">
            <div style={{ marginLeft: `-10rem` }}>
              <Row>
                <div>
                  <Image src={images.alarmOb1.replace("/", "")} />
                </div>
                <div style={{ marginLeft: `auto` }}>
                  <Image src={images.alarmYou1.replace("/", "")} />
                </div>
              </Row>
            </div>
            <Appear>
              <div>
                <div style={{ position: `absolute`, right: 0, bottom: `20px`, textAlign: `left`, color: `white` }}>
                  <pre>{`> bring bring`}</pre>
                  <pre>{`> ZZzzzz...`}</pre>
                </div>
              </div>
            </Appear>
          </Slide>

          <Slide bgColor="#282C34">
            <div style={{ marginLeft: `-10rem` }}>
              <Row>
                <div>
                  <Image src={images.alarmOb1.replace("/", "")} />
                </div>
                <div style={{ marginLeft: `auto` }}>
                  <Image src={images.alarmYou1.replace("/", "")} />
                </div>
              </Row>
            </div>
            <div>
              <div style={{ position: `absolute`, right: 0, bottom: `20px`, textAlign: `left`, color: `white` }}>
                <pre>{`> bring bring`}</pre>
                <pre>{`> ZZzzzz...`}</pre>
                <pre>{`> bring bring`}</pre>
                <pre>{`> ZZzzzz...`}</pre>
              </div>
            </div>
          </Slide>

          <Slide bgColor="#282C34">
            <div style={{ marginLeft: `-10rem` }}>
              <Row>
                <div>
                  <Image src={images.alarmOb1.replace("/", "")} />
                </div>
                <div style={{ marginLeft: `auto` }}>
                  <Image src={images.alarmYou1.replace("/", "")} />
                </div>
              </Row>
            </div>
            <div>
              <div style={{ position: `absolute`, right: 0, bottom: `20px`, textAlign: `left`, color: `white` }}>
                <pre>{`> bring bring`}</pre>
                <pre>{`> ZZzzzz...`}</pre>
                <pre>{`> bring bring`}</pre>
                <pre>{`> ZZzzzz...`}</pre>
                <pre>{`> bring bring`}</pre>
                <pre>{`> ZZzzzz...`}</pre>
              </div>
            </div>
          </Slide>

          <Slide bgColor="#282C34">
            <div style={{ marginLeft: `-10rem` }}>
              <Row>
                <div>
                  <Image src={images.alarmOb1.replace("/", "")} />
                </div>
                <div style={{ marginLeft: `auto` }}>
                  <Image src={images.alarmYou1.replace("/", "")} />
                </div>
              </Row>
            </div>
            <div>
              <div style={{ position: `absolute`, right: 0, bottom: `20px`, textAlign: `left`, color: `white` }}>
                <pre>{`> bring bring`}</pre>
                <pre>{`> ZZzzzz...`}</pre>
                <pre>{`> bring bring`}</pre>
                <pre>{`> ZZzzzz...`}</pre>
                <pre>{`> bring bring`}</pre>
                <pre>{`> ZZzzzz...`}</pre>
                <pre>{`> bring bring`}</pre>
                <pre>{`> ZZzzzz...`}</pre>
              </div>
            </div>
          </Slide>

          <Slide bgColor="#282C34">
            <div style={{ marginLeft: `-10rem` }}>
              <Row>
                <div>
                  <Image src={images.alarmOb2.replace("/", "")} />
                </div>
                <div style={{ marginLeft: `auto` }}>
                  <Image src={images.alarmYou2.replace("/", "")} />
                </div>
              </Row>
            </div>
            <Appear>
              <div>
                <div style={{ position: `absolute`, right: 0, bottom: `20px`, textAlign: `left`, color: `white` }}>
                  <div>
                    <div
                      style={{
                        position: `relative`,
                        top: `106px`,
                        left: `-71px`,
                        fontFamily: `monospace`,
                      }}
                    >
                      x3
                    </div>

                    <div>
                      <pre>{`> bring bring`}</pre>
                      <pre>{`> ZZzzzz...`}</pre>
                    </div>
                  </div>
                </div>
              </div>
            </Appear>
          </Slide>

          <Slide bgColor="#282C34">
            <div style={{ marginLeft: `-10rem` }}>
              <Row>
                <div>
                  <Image src={images.alarmOb2.replace("/", "")} />
                </div>
                <div style={{ marginLeft: `auto` }}>
                  <Image src={images.alarmYou2.replace("/", "")} />
                </div>
              </Row>
            </div>
            <div>
              <div style={{ position: `absolute`, right: 0, bottom: `20px`, textAlign: `left`, color: `white` }}>
                <div>
                  <div
                    style={{
                      position: `relative`,
                      top: `106px`,
                      left: `-71px`,
                      fontFamily: `monospace`,
                    }}
                  >
                    x3
                  </div>

                  <div>
                    <pre>{`> bring bring`}</pre>
                    <pre>{`> ZZzzzz...`}</pre>
                  </div>
                </div>
                <div>
                  <pre>{`// wait 5s`}</pre>
                </div>
              </div>
            </div>
          </Slide>

          <Slide bgColor="#282C34">
            <div style={{ marginLeft: `-10rem` }}>
              <Row>
                <div>
                  <Image src={images.alarmOb2.replace("/", "")} />
                </div>
                <div style={{ marginLeft: `auto` }}>
                  <Image src={images.alarmYou2.replace("/", "")} />
                </div>
              </Row>
            </div>
            <div>
              <div style={{ position: `absolute`, right: 0, bottom: `20px`, textAlign: `left`, color: `white` }}>
                <div>
                  <div
                    style={{
                      position: `relative`,
                      top: `106px`,
                      left: `-71px`,
                      fontFamily: `monospace`,
                    }}
                  >
                    x3
                  </div>

                  <div>
                    <pre>{`> bring bring`}</pre>
                    <pre>{`> ZZzzzz...`}</pre>
                  </div>
                </div>
                <div>
                  <pre>{`// wait 5s`}</pre>
                </div>
                <div>
                  <div
                    style={{
                      position: `relative`,
                      top: `106px`,
                      left: `-71px`,
                      fontFamily: `monospace`,
                    }}
                  >
                    x3
                  </div>

                  <div>
                    <pre>{`> bring bring`}</pre>
                    <pre>{`> ZZzzzz...`}</pre>
                  </div>
                </div>
              </div>
            </div>
          </Slide>

          <Slide bgColor="#282C34">
            <div style={{ marginLeft: `-10rem` }}>
              <Row>
                <div>
                  <Image src={images.alarmOb2.replace("/", "")} />
                </div>
                <div style={{ marginLeft: `auto` }}>
                  <Image src={images.alarmYou2.replace("/", "")} />
                </div>
              </Row>
            </div>
            <div>
              <div style={{ position: `absolute`, right: 0, bottom: `20px`, textAlign: `left`, color: `white` }}>
                <div>
                  <div
                    style={{
                      position: `relative`,
                      top: `106px`,
                      left: `-71px`,
                      fontFamily: `monospace`,
                    }}
                  >
                    x3
                  </div>

                  <div>
                    <pre>{`> bring bring`}</pre>
                    <pre>{`> ZZzzzz...`}</pre>
                  </div>
                </div>
                <div>
                  <pre>{`// wait 5s`}</pre>
                </div>
                <div>
                  <div
                    style={{
                      position: `relative`,
                      top: `106px`,
                      left: `-71px`,
                      fontFamily: `monospace`,
                    }}
                  >
                    x3
                  </div>

                  <div>
                    <pre>{`> bring bring`}</pre>
                    <pre>{`> ZZzzzz...`}</pre>
                  </div>
                </div>
                <div>
                  <pre>{`// wait 5s`}</pre>
                </div>
              </div>
            </div>
          </Slide>

          <Slide bgColor="#282C34">
            <div style={{ marginLeft: `-10rem` }}>
              <Row>
                <div>
                  <Image src={images.alarmOb3.replace("/", "")} />
                </div>
                <div style={{ marginLeft: `auto` }}>
                  <Image src={images.alarmYou3.replace("/", "")} />
                </div>
              </Row>
            </div>
            <Appear>
              <div>
                <div style={{ position: `absolute`, right: 0, bottom: `20px`, textAlign: `left`, color: `white` }}>
                  <div>
                    <div
                      style={{
                        position: `relative`,
                        top: `106px`,
                        left: `-71px`,
                        fontFamily: `monospace`,
                      }}
                    >
                      x3
                    </div>

                    <div>
                      <pre>{`> bring bring`}</pre>
                      <pre>{`> ZZzzzz...`}</pre>
                    </div>
                  </div>
                  <div>
                    <pre>{`// wait 5s`}</pre>
                    <pre style={{ opacity: 0 }}>{`> Okay, okay ... I'm getting up`}</pre>
                  </div>
                </div>
              </div>
            </Appear>
          </Slide>

          <Slide bgColor="#282C34">
            <div style={{ marginLeft: `-10rem` }}>
              <Row>
                <div>
                  <Image src={images.alarmOb3.replace("/", "")} />
                </div>
                <div style={{ marginLeft: `auto` }}>
                  <Image src={images.alarmYou3.replace("/", "")} />
                </div>
              </Row>
            </div>
              <div>
                <div style={{ position: `absolute`, right: 0, bottom: `20px`, textAlign: `left`, color: `white` }}>
                  <div>
                    <div
                      style={{
                        position: `relative`,
                        top: `106px`,
                        left: `-71px`,
                        fontFamily: `monospace`,
                      }}
                    >
                      x3
                    </div>

                    <div>
                      <pre>{`> bring bring`}</pre>
                      <pre>{`> ZZzzzz...`}</pre>
                    </div>
                  </div>
                  <div>
                    <pre>{`// wait 5s`}</pre>
                    <pre>{`> Okay, okay ... I'm getting up`}</pre>
                  </div>
                </div>
              </div>
          </Slide>

          <Slide bgColor="#282C34">
            <div style={{ marginLeft: `-10rem` }}>
              <Row>
                <div>
                  <Image src={images.alarmOb3.replace("/", "")} />
                </div>
                <div style={{ marginLeft: `auto` }}>
                  <Image src={images.alarmYou3.replace("/", "")} />
                </div>
              </Row>
            </div>
              <div>
                <div style={{ position: `absolute`, right: 0, bottom: `20px`, textAlign: `left`, color: `white` }}>
                  <div>
                    <div
                      style={{
                        position: `relative`,
                        top: `106px`,
                        left: `-71px`,
                        fontFamily: `monospace`,
                      }}
                    >
                      x3
                    </div>

                    <div>
                      <pre>{`> bring bring`}</pre>
                      <pre>{`> ZZzzzz...`}</pre>
                    </div>
                  </div>
                  <div>
                    <pre>{`// wait 5s`}</pre>
                    <pre>{`> Okay, okay ... I'm getting up`}</pre>
                  </div>
                  <div>
                    <pre style={{ color: `rgb(235, 111, 111)`}}>{`> bring bring`}</pre>
                    <pre style={{ color: `rgb(235, 111, 111)`}}>{`> ZZzzzz...`}</pre>
                  </div>
                </div>
              </div>
          </Slide>

          <Slide bgColor="#282C34">
            <div style={{ marginLeft: `-10rem` }}>
              <Row>
                <div>
                  <Image src={images.alarmOb4.replace("/", "")} />
                </div>
                <div style={{ marginLeft: `auto` }}>
                  <Image src={images.alarmYou3.replace("/", "")} />
                </div>
              </Row>
            </div>
            <Appear>
              <div>
                <div style={{ position: `absolute`, right: 0, bottom: `20px`, textAlign: `left`, color: `white` }}>
                  <div>
                    <div
                    style={{
                        position: `relative`,
                        top: `106px`,
                        left: `-71px`,
                        fontFamily: `monospace`,
                      }}
                    >
                      x3
                    </div>

                    <div>
                      <pre>{`> bring bring`}</pre>
                      <pre>{`> ZZzzzz...`}</pre>
                    </div>
                  </div>
                  <div>
                    <pre>{`// wait 5s`}</pre>
                    <pre>{`> Okay, okay ... I'm getting up`}</pre>
                  </div>
                </div>
              </div>
            </Appear>
          </Slide>

          <Slide transition={["fade"]} bgColor="primary">
            <Heading textColor="black">What can we know so far?</Heading>
          </Slide>

          <Slide transition={["fade"]} bgColor="primary">
            <Heading textColor="black">Observable Basics</Heading>
            <List>
              <ListItem>
                a function that accepts an observer as an argument<br />
                <Appear>
                  <span>
                    <span style={{ position: `relative`, left: `88px` }}>
                      (when called, permits an Observer to "subscribe" to it)
                    </span>
                  </span>
                </Appear>
              </ListItem>
              <Appear><ListItem>lazy</ListItem></Appear>
              <Appear><ListItem>synchronous or asynchronous</ListItem></Appear>
              <Appear><ListItem>emit 0 to n values</ListItem></Appear>
              <Appear>
                <ListItem>
                  userful to provide cancellation semantics<br />
                  <span style={{ position: `relative`, left: `88px` }}>
                    (typically as an "unsubscribe" function)
                  </span>
                </ListItem>
              </Appear>
            </List>
          </Slide>

          <Slide transition={["fade"]} bgImage={images.you_and_life.replace("/", "")} bgDarken={0.25}>
            <Heading>You</Heading>
            <Heading>Observe</Heading>
            <Heading textSize={`3.2rem`} margin={`1rem 0rem`}>(filter, categorize and delay reading)</Heading>
            <Heading>Your Email Inbox</Heading>
          </Slide>

        </Deck>
      </Spectacle>
    );
  }
}
