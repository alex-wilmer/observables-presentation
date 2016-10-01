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
  Text,
  Table,
  TableRow,
  TableHeader,
  TableItem,
  TableHeaderItem,
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

  ma1full: require('../assets/alarm2/ma1-full.png'),
  ma2full: require('../assets/alarm2/ma2-full.png'),
  ma2hilite1: require('../assets/alarm2/ma2-hilite1.png'),
  ma2hilite2: require('../assets/alarm2/ma2-hilite2.png'),
  ma2hilite3: require('../assets/alarm2/ma2-hilite3.png'),
  ma3full: require('../assets/alarm2/ma3-full.png'),
  ma3hilite1: require('../assets/alarm2/ma3-hilite1.png'),
  ma3hilite2: require('../assets/alarm2/ma3-hilite2.png'),
  ma3hilite3: require('../assets/alarm2/ma3-hilite3.png'),
  ma4full: require('../assets/alarm2/ma4-full.png'),
  ma4hilite1: require('../assets/alarm2/ma4-hilite1.png'),
  ma4hilite2: require('../assets/alarm2/ma4-hilite2.png'),
  ma4hilite3: require('../assets/alarm2/ma4-hilite3.png'),

  you1full: require('../assets/alarm2/you1-full.png'),
  you2full: require('../assets/alarm2/you2-full.png'),
  you2hilite1: require('../assets/alarm2/you2-hilite1.png'),
  you2hilite2: require('../assets/alarm2/you2-hilite2.png'),
  you2hilite3: require('../assets/alarm2/you2-hilite3.png'),
  you3full: require('../assets/alarm2/you3-full.png'),
  you3hilite1: require('../assets/alarm2/you3-hilite1.png'),
  you3hilite2: require('../assets/alarm2/you3-hilite2.png'),
  you3hilite3: require('../assets/alarm2/you3-hilite3.png'),
  you3hilite4: require('../assets/alarm2/you3-hilite4.png'),

  emailPlain: require('../assets/email/plain.png'),
  emailFilter1: require('../assets/email/filter1.png'),
  emailFilter2: require('../assets/email/filter2.png'),
  emailMap1: require('../assets/email/map1.png'),
  emailMap2: require('../assets/email/map2.png'),
  emailDelay1: require('../assets/email/delay1.png'),
  emailDelay2: require('../assets/email/delay2.png'),

  merge1: require('../assets/merge/merge1.png'),
  merge2: require('../assets/merge/merge2.png'),
  merge3: require('../assets/merge/merge3.png'),
  merge4: require('../assets/merge/merge4.png'),
  mergeComplete: require('../assets/merge/complete.png'),

  you_and_life: require('../assets/you&life.png'),
  you: require('../assets/you.png'),
  wakeup: require('../assets/wake-up.jpg'),
  run_life: require('../assets/run_life.png'),
  checking_email: require('../assets/checking_emails.jpg'),
  marketing: require('../assets/marketing.jpg'),
  cutecat: require('../assets/cutecat.jpg'),

  rxjsLogo: require('../assets/rxjs-logo.png'),
  rxjsWebsite: require('../assets/rxjs-website.jpg'),
  rxLangs: require('../assets/rx-langs.png'),

  rxlist: require('../assets/rxjs/list.png'),
  rxlist1: require('../assets/rxjs/list1.png'),
  rxlist2: require('../assets/rxjs/list2.png'),
  rxlist3: require('../assets/rxjs/list3.png'),
  rxlist4: require('../assets/rxjs/list4.png'),
  rxlist5: require('../assets/rxjs/list5.png'),
  rxlist6: require('../assets/rxjs/list6.png'),
  rxlist7: require('../assets/rxjs/list7.png'),

  rxoppage: require('../assets/rxjs/oppage.png'),
  rxophelp: require('../assets/rxjs/ophelp.png'),
  rxophelp2: require('../assets/rxjs/ophelp2.png'),
  rxophelp3: require('../assets/rxjs/ophelp3.png'),

  rxMarbleMerge: require('../assets/rxjs/marbleMerge.png'),
  rxMarbleDelay: require('../assets/rxjs/marbleDelay.png'),

}

preloader(images)

const theme = createTheme({
  primary: "#ffa740"
})

let Row = ({ style, children }) =>
  <div style={{ display: `flex`, ...style }}>{children}</div>

let Column = ({ style, children }) =>
  <div style={{ display: `flex`, flexDirection: `column`, ...style }}>{children}</div>

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck>
          <Slide>
            <Content.Title />
          </Slide>

          <Slide transition={["fade"]} bgColor="primary">
            <Heading textColor="black">
              Act I: <br /> Reactive Programming
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

          <Slide bgColor="#263238">
            <div style={{ marginLeft: `-10rem` }}>
              <Image src={images.ma1full.replace("/", "")} width='800px' />
            </div>
          </Slide>

          <Slide bgColor="#263238">
            <div style={{ marginLeft: `-10rem` }}>
              <Image src={images.you1full.replace("/", "")} width='850px' />
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

          <Slide bgColor="#263238">
            <div style={{ marginLeft: `-10rem` }}>
              <div>
                <Image src={images.you1full.replace("/", "")} width='850px' />
              </div>
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

          <Slide bgColor="#263238">
            <div style={{ marginLeft: `-10rem` }}>
              <div>
                <Image src={images.you1full.replace("/", "")} width='850px' />
              </div>
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

          <Slide bgColor="#263238">
            <div style={{ marginLeft: `-10rem` }}>
              <Image src={images.ma2full.replace("/", "")} width='800px' />
            </div>
          </Slide>

          <Slide bgColor="#263238">
            <div style={{ marginLeft: `-10rem` }}>
              <Image src={images.ma2hilite1.replace("/", "")} width='800px' />
            </div>
          </Slide>

          <Slide bgColor="#263238">
            <div style={{ marginLeft: `-10rem` }}>
              <Image src={images.ma2hilite2.replace("/", "")} width='800px' />
            </div>
          </Slide>

          <Slide bgColor="#263238">
            <div style={{ marginLeft: `-10rem` }}>
              <Image src={images.ma2hilite3.replace("/", "")} width='800px' />
            </div>
          </Slide>

          <Slide bgColor="#263238">
            <div style={{ marginLeft: `-10rem` }}>
              <div>
                <Image src={images.you2full.replace("/", "")} width='850px' />
              </div>
            </div>
          </Slide>

          <Slide bgColor="#263238">
            <div style={{ marginLeft: `-10rem` }}>
              <div>
                <Image src={images.you2hilite1.replace("/", "")} width='850px' />
              </div>
            </div>
          </Slide>

          <Slide bgColor="#263238">
            <div style={{ marginLeft: `-10rem` }}>
              <div>
                <Image src={images.you2hilite2.replace("/", "")} width='850px' />
              </div>
            </div>
          </Slide>

          <Slide bgColor="#263238">
            <div style={{ marginLeft: `-10rem` }}>
              <div>
                <Image src={images.you2hilite3.replace("/", "")} width='850px' />
              </div>
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

          <Slide bgColor="#263238">
            <div style={{ marginLeft: `-10rem` }}>
              <div>
                <Image src={images.you2hilite3.replace("/", "")} width='850px' />
              </div>
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

          <Slide bgColor="#263238">
            <div style={{ marginLeft: `-10rem` }}>
              <div>
                <Image src={images.you2hilite3.replace("/", "")} width='850px' />
              </div>
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

          <Slide bgColor="#263238">
            <div style={{ marginLeft: `-10rem` }}>
              <div>
                <Image src={images.you2hilite3.replace("/", "")} width='850px' />
              </div>
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

          <Slide bgColor="#263238">
            <div style={{ marginLeft: `-10rem` }}>
              <Image src={images.ma3full.replace("/", "")} width='700px' />
            </div>
          </Slide>

          <Slide bgColor="#263238">
            <div style={{ marginLeft: `-10rem` }}>
              <Image src={images.ma3hilite1.replace("/", "")} width='700px' />
            </div>
          </Slide>

          <Slide bgColor="#263238">
            <div style={{ marginLeft: `-10rem` }}>
              <Image src={images.ma3hilite2.replace("/", "")} width='700px' />
            </div>
          </Slide>

          <Slide bgColor="#263238">
            <div style={{ marginLeft: `-10rem` }}>
              <Image src={images.ma3hilite3.replace("/", "")} width='700px' />
            </div>
          </Slide>

          <Slide bgColor="#263238">
            <div style={{ marginLeft: `-10rem` }}>
              <div>
                <Image src={images.you3full.replace("/", "")} width='850px' />
              </div>
            </div>
          </Slide>

          <Slide bgColor="#263238">
            <div style={{ marginLeft: `-10rem` }}>
              <div>
                <Image src={images.you3hilite1.replace("/", "")} width='850px' />
              </div>
            </div>
          </Slide>

          <Slide bgColor="#263238">
            <div style={{ marginLeft: `-10rem` }}>
              <div>
                <Image src={images.you3hilite2.replace("/", "")} width='850px' />
              </div>
            </div>
          </Slide>

          <Slide bgColor="#263238">
            <div style={{ marginLeft: `-10rem` }}>
              <div>
                <Image src={images.you3hilite3.replace("/", "")} width='850px' />
              </div>
            </div>
          </Slide>

          <Slide bgColor="#263238">
            <div style={{ marginLeft: `-10rem` }}>
              <div>
                <Image src={images.you3hilite4.replace("/", "")} width='850px' />
              </div>
            </div>
          </Slide>


          <Slide bgColor="#263238">
            <div style={{ marginLeft: `-10rem` }}>
              <div>
                <Image src={images.you3hilite4.replace("/", "")} width='850px' style={{opacity: 0.5}} />
              </div>
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
                  <pre style={{ opacity: 0 }}>{`> Okay, okay ... I'm getting up`}</pre>
                </div>
              </div>
            </div>
          </Slide>

          <Slide bgColor="#263238">
            <div style={{ marginLeft: `-10rem` }}>
              <div>
                <Image src={images.you3hilite4.replace("/", "")} width='850px' style={{opacity: 0.5}}/>
              </div>
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

          <Slide bgColor="#263238">
            <div style={{ marginLeft: `-10rem` }}>
              <div>
                <Image src={images.you3hilite4.replace("/", "")} width='850px' style={{opacity: 0.5}}/>
              </div>
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

          <Slide bgColor="#263238">
            <div style={{ marginLeft: `-10rem` }}>
              <Image src={images.ma4full.replace("/", "")} width='600px' />
            </div>
          </Slide>

          <Slide bgColor="#263238">
            <div style={{ marginLeft: `-10rem` }}>
              <Image src={images.ma4hilite1.replace("/", "")} width='600px' />
            </div>
          </Slide>

          <Slide bgColor="#263238">
            <div style={{ marginLeft: `-10rem` }}>
              <Image src={images.ma4hilite2.replace("/", "")} width='600px' />
            </div>
          </Slide>

          <Slide bgColor="#263238">
            <div style={{ marginLeft: `-10rem` }}>
              <Image src={images.ma4hilite3.replace("/", "")} width='600px' />
            </div>
          </Slide>

          <Slide transition={["fade"]} bgColor="primary">
            <Heading textColor="black">Observable Basics</Heading>
            <List>
              <ListItem>
                a <strong>function</strong> that accepts an <strong>Observer</strong> as an argument<br />
                <Appear>
                  <span>
                    <span style={{ position: `relative`, left: `88px` }}>
                      (when called, permits the Observer to <strong>"subscribe"</strong> to it)
                    </span>
                  </span>
                </Appear>
              </ListItem>
              <Appear><ListItem><strong>lazy</strong></ListItem></Appear>
              <Appear><ListItem>synchronous <strong>or</strong> asynchronous</ListItem></Appear>
              <Appear><ListItem>can emit zero to infinite number of values</ListItem></Appear>
              <Appear><ListItem>Possible to interact with Observable after initial subscription</ListItem></Appear>
              <Appear>
                <ListItem>
                  useful to provide cancellation semantics<br />
                  <span style={{ position: `relative`, left: `88px` }}>
                    (typically as an <strong>"unsubscribe"</strong> function)
                  </span>
                </ListItem>
              </Appear>
            </List>
          </Slide>

          <Slide transition={["fade"]} bgColor="primary">
            <Heading textColor="black">When it's done.. <br />it's done.</Heading>
          </Slide>

          <Slide transition={["fade"]} bgColor="primary">
            <Heading textColor="black" textSize="4rem">Comparison Chart</Heading>
            <Column style={{ position: `relative`, left: `-75px`, marginTop: `3rem` }}>
              <Row>
                <Row style={{ flex: 1 }} />
                <Row style={{ flex: 1, fontSize: `3rem` }}>One Value</Row>
                <Row style={{ flex: 1, fontSize: `3rem` }}>0-N Values</Row>
              </Row>
              <Row style={{ lineHeight: `7rem` }}>
                <Row style={{ flex: 1, fontSize: `3rem` }}>
                  <span style={{ margin: `0 50px 0 auto` }}>Consumer</span>
                </Row>
                <Row style={{ flex: 1, fontSize: `3rem` }}><Appear><b>Function</b></Appear></Row>
                <Row style={{ flex: 1, fontSize: `3rem` }}><Appear><b>Generator</b></Appear></Row>
              </Row>
              <Row>
                <Row style={{ flex: 1, fontSize: `3rem` }}>
                  <span style={{ margin: `0 50px 0 auto` }}>Producer</span>
                </Row>
                <Row style={{ flex: 1, fontSize: `3rem` }}><Appear><b>Promise</b></Appear></Row>
                <Row style={{ flex: 1, fontSize: `3rem` }}><Appear><b>Observable</b></Appear></Row>
              </Row>
            </Column>
          </Slide>

          <Slide transition={["fade"]} bgImage={images.checking_email.replace("/", "")} >
            <Heading style={{ textAlign: `right` }}>You</Heading>
            <Heading style={{ textAlign: `right` }}>Observe</Heading>
            <Heading textSize={`3.2rem`} margin={`1rem 0rem`} style={{ textAlign: `right` }}>
              (filter, edit and delay reading)
            </Heading>
            <Heading style={{ textAlign: `right` }}>Your Email Inbox</Heading>
          </Slide>

          <Slide transition={["fade"]} bgColor="#263238">
            <Image src={images.emailPlain.replace("/", "")} width='700px'/>
            <Appear>
              <div>
                <div style={{ position: `absolute`, right: 0, bottom: `20px`, textAlign: `left`, color: `white` }}>
                  <div>
                    <pre>{`> You're fired!`}</pre>
                    <pre>{`> You're slacking!`}</pre>
                    <pre>{`> You're rich!`}</pre>
                  </div>
                </div>
              </div>
            </Appear>
          </Slide>

          <Slide bgColor="#263238">
            <Image src={images.emailFilter1.replace("/", "")} width='700px'/>
          </Slide>

          <Slide bgColor="#263238">
            <Image src={images.emailFilter2.replace("/", "")} width='700px'/>
            <Appear>
              <div>
                <div style={{ position: `absolute`, right: 0, bottom: `20px`, textAlign: `left`, color: `white` }}>
                  <div>
                    <pre>{`> You're slacking!`}</pre>
                    <pre>{`> You're rich!`}</pre>
                  </div>
                </div>
              </div>
            </Appear>
          </Slide>

          <Slide bgColor="#263238">
            <Image src={images.emailMap1.replace("/", "")} width='700px'/>
          </Slide>

          <Slide bgColor="#263238">
            <Image src={images.emailMap2.replace("/", "")} width='700px'/>
            <Appear>
              <div>
                <div style={{ position: `absolute`, right: 0, bottom: `20px`, textAlign: `left`, color: `white` }}>
                  <div>
                    <pre>{`> You're fantastic!`}</pre>
                    <pre>{`> You're rich!`}</pre>
                  </div>
                </div>
              </div>
            </Appear>
          </Slide>

          <Slide bgColor="#263238">
            <Image src={images.emailDelay1.replace("/", "")} width='700px'/>
          </Slide>

          <Slide bgColor="#263238">
            <Image src={images.emailDelay2.replace("/", "")} width='700px'/>
          </Slide>

          <Slide transition={["fade"]} bgImage={images.marketing.replace("/", "")} bgDarken={0.45}>
            <Heading textSize="5rem" style={{textAlign: `left`}}>You</Heading>
            <Heading textSize="5rem" style={{textAlign: `left`}}>Observe</Heading>
            <Heading textSize="4.1rem" style={{textAlign: `left`}}>An "Engaging" Marketing Meeting</Heading>
          </Slide>

          <Slide transition={["fade"]} bgColor="#263238">
            <Image src={images.merge1.replace("/", "")} width='50vw'/>
          </Slide>
          <Slide bgColor="#263238">
            <Image src={images.merge2.replace("/", "")} width='50vw'/>
          </Slide>
          <Slide bgColor="#263238">
            <Image src={images.merge3.replace("/", "")} width='50vw'/>
          </Slide>
          <Slide bgColor="#263238">
            <Image src={images.merge4.replace("/", "")} width='50vw'/>
          </Slide>
          <Slide bgColor="#263238">
            <Image src={images.mergeComplete.replace("/", "")} width='50vw'/>
            <Appear>
              <div>
                <div style={{ position: `absolute`, right: 0, bottom: `20px`, textAlign: `left`, color: `white` }}>
                  <div>
                    <pre>{`> blahblahblah!! Okay!`}</pre>
                    <pre>{`> blahblahblah... Okay!`}</pre>
                  </div>
                </div>
              </div>
            </Appear>
          </Slide>

          <Slide transition={["fade"]} bgColor="rgb(31, 105, 87)">
            <Heading textColor="white">Operators!</Heading>
            <Appear>
              <Text margin={`3rem 0rem 0rem 0rem`} textColor="white">
                Are <strong>functions</strong> that accept an Observable and<br /> return
                a (potentially modified) Observable...
              </Text>
            </Appear>
            <Appear>
              <Text margin={`3rem 0rem 0rem 0rem`} textColor="white">
                <strong>...and are composable!</strong>
              </Text>
            </Appear>
            <Appear>
              <Text textSize='1.7rem' margin={`3rem 0rem 0rem 0rem`} textColor="white">
                <pre>delay(10, map(addOne, filter(odd, Observable)))</pre>
              </Text>
            </Appear>
            <Appear>
              <Text textSize='1.7rem' margin={`3rem 0rem 0rem 0rem`} textColor="white">
                <pre>compose(delay(10), map(addOne), filter(odd))(Observable)</pre>
              </Text>
            </Appear>
          </Slide>

          <Slide transition={["fade"]} bgColor="white">
            <Image src={images.rxjsLogo.replace("/", "")} />
          </Slide>

          <Slide transition={["fade"]} bgImage={images.rxjsWebsite.replace("/", "")} />
          <Slide transition={["fade"]} bgImage={images.rxLangs.replace("/", "")} />
          <Slide transition={["fade"]} bgImage={images.rxoppage.replace("/", "")} />
          <Slide transition={["fade"]} bgImage={images.rxlist1.replace("/", "")} />
          <Slide bgImage={images.rxlist2.replace("/", "")} />
          <Slide bgImage={images.rxlist3.replace("/", "")} />
          <Slide bgImage={images.rxlist4.replace("/", "")} />
          <Slide bgImage={images.rxlist5.replace("/", "")} />
          <Slide bgImage={images.rxlist6.replace("/", "")} />
          <Slide bgImage={images.rxlist7.replace("/", "")} />

          <Slide bgColor="white">
            <Image src={images.rxophelp.replace("/", "")} width="850px"/>
          </Slide>

          <Slide bgColor="white">
            <Image src={images.rxophelp2.replace("/", "")} width="850px"/>
          </Slide>

          <Slide bgColor="white">
            <Image src={images.rxophelp3.replace("/", "")} width="850px"/>
          </Slide>

          <Slide bgColor="white">
            <Image src={images.rxMarbleMerge.replace("/", "")} width="850px"/>
          </Slide>

          <Slide bgColor="white">
            <Image src={images.rxMarbleDelay.replace("/", "")} width="850px"/>
          </Slide>

          <Slide transition={["fade"]} bgColor="rgb(31, 105, 87)">
            <Heading textSize="3rem">Anatomy of Rx Observer & Observable</Heading>
            <Row>
            <pre style={{
              textAlign: `left`,
              color: `rgb(235, 240, 23)`,
              marginRight: `3rem`,
              fontSize: `1.4rem`,
            }}>{`
observer = {
  next: val => ...,
  error: err => ...,
  complete: () => ...
}
`}            </pre>
  <Appear>
    <span>
            <pre style={{
              textAlign: `left`,
              color: `rgb(235, 240, 23)`,
              marginLeft: `3rem`,
              fontSize: `1.4rem`,
            }}>{`
observervable$.subscribe(observer)

observervable$.subscribe(
  val => ...,
  err => ...,
  () => ...
)
`}            </pre>
  </span>
</Appear>
  </Row>
          </Slide>

          <Slide transition={["fade"]} bgColor="#2D2D2D">
            <Heading textColor="white">
              Act II: <br /> Reactive Programming
            </Heading>
          </Slide>

          <Slide transition={["fade"]} bgColor="#2D2D2D">
            <CodePane
              lang="jsx"
              style={{
                color: `white`,
                fontSize: `3rem`,
              }}
              source={
                `x = a + b`
              }/>
          </Slide>

          <Slide transition={["fade"]} bgColor="#2D2D2D">
          <CodePane
            lang="jsx"
            style={{
              color: `white`,
              fontSize: `2rem`,
          }}
          source={
`let a = 1, b = 2
let x = a + b
console.log(x)

document.getElementById('btn').onclick = () => {
  a++
  x = a + b
  console.log(x)
}
`}
  />
          </Slide>

          <Slide transition={["fade"]} bgColor="#2D2D2D">
          <CodePane
            lang="jsx"
            style={{
              color: `white`,
              fontSize: `1.3rem`,
          }}
          source={
`import { Observable } from 'rxjs'

let b$ = Observable.of(2)

let a$ = Observable.create(observer => {
  let a = 1
  observer.next(a)

  document.getElementById('btn').onclick = () => {
    a++
    observer.next(a)
  }
})

let x$ = Observable.combineLatest(a$, b$, (x, y) => x + y)
x$.subscribe(val => console.log(val))
`}
  />
          </Slide>

          <Slide transition={["fade"]} bgImage={images.cutecat.replace("/", "")} bgDarken={0.45}>
            <Heading textSize="5rem" style={{textAlign: `left`, marginTop: `17rem`}}>You</Heading>
            <Heading textSize="5rem" style={{textAlign: `left`}}>Observe</Heading>
            <Heading textSize="4.1rem" style={{textAlign: `left`}}>
              Your Desire To See Cute Animals
            </Heading>
          </Slide>

          <Slide transition={["fade"]} bgColor="#2D2D2D">
            <Layout>
              <Fill>
              <CodePane
                lang="jsx"
                style={{
                  color: `white`,
                  fontSize: `1.1rem`,
                  textAlign: `left`,
                  marginLeft: `-8rem`,
                  marginTop: `-3rem`,
              }}
              source=
{`

class App extends Component {
  componentDidMount() {
    let inputElement = document.querySelector('input')

    let input$ =
      Observable.fromEvent(inputElement, 'input')
        .map(event => event.target.value)

    input$.subscribe(text => this.setState({ text }))
  }

  render() {
    return (
      <div>
        <input type="text" />
        <h2>{this.state.text}</h2>
      </div>
    )
  }
`}
                />
              </Fill>
              <Fill>
                <Content.Awwsearch />
              </Fill>
            </Layout>
          </Slide>

          <Slide transition={["fade"]} bgColor="#2D2D2D">
            <Layout>
              <Fill>
              <CodePane
                lang="jsx"
                style={{
                  color: `white`,
                  fontSize: `1.1rem`,
                  textAlign: `left`,
                  marginLeft: `-8rem`,
                  marginTop: `-3rem`,
              }}
              source={`

class App extends Component {
  componentDidMount() {
    let inputElement = document.querySelector('input')

    let input$ =
      Observable.fromEvent(inputElement, 'input')
        .map(event => event.target.value)
        .filter(value => value.length > 3)

    input$.subscribe(text => this.setState({ text }))
  }

  render() {
    return (
      <div>
        <input type="text" />
        <h2>{this.state.text}</h2>
      </div>
    )
  }
`}
                />
              </Fill>
              <Fill>
                <Content.Awwsearch2 />
              </Fill>
            </Layout>
          </Slide>

          <Slide transition={["fade"]} bgColor="#2D2D2D">
            <Layout>
              <Fill>
              <CodePane
                lang="jsx"
                style={{
                  color: `white`,
                  fontSize: `1.1rem`,
                  textAlign: `left`,
                  marginLeft: `-8rem`,
                  marginTop: `-3rem`,
              }}
              source=
{`

class App extends Component {
  componentDidMount() {
    let inputElement = document.querySelector('input')

    let input$ =
      Observable.fromEvent(inputElement, 'input')
        .map(event => event.target.value)
        .filter(value => value.length > 2)
        .debounce(() => Observable.interval(500))

    input$.subscribe(text => this.setState({ text }))
  }

  render() {
    return (
      <div>
        <input type="text" />
        <h2>{this.state.text}</h2>
      </div>
    )
  }
`}
                />
              </Fill>
              <Fill>
                <Content.Awwsearch3 />
              </Fill>
            </Layout>
          </Slide>

          <Slide transition={["fade"]} bgColor="#2D2D2D">
            <Layout>
              <Fill>
                <CodePane
                  lang="jsx"
                  style={{
                    color: `white`,
                    fontSize: `0.9rem`,
                    textAlign: `left`,
                    marginLeft: `-8rem`,
                    marginTop: `-3rem`,
                }}
                source=
{`

class App extends Component {
  componentDidMount() {
    let input$ =
      Observable.fromEvent(document.querySelector('input'), 'input')
        .map(event => event.target.value)
        .filter(value => value.length > 2)
        .debounce(() => Observable.interval(500))
        .flatMap(val => Observable.fromPromise(
          fetch("https://www.reddit.com/r/aww/search.json?q=" + val + "&restrict_sr=on")
            .then(res => res.json())
        ))

    input$.subscribe(img => {
      this.setState({ images: [img, ...this.state.images] })
    })
  }

  render() {
    return (
      <div>
        <input type="text" />
        {this.state.images}
      </div>
    )
  }
`} />

              </Fill>
              <Fill>
                <Content.Awwsearch4 />
              </Fill>
            </Layout>
          </Slide>

          <Slide transition={["fade"]} bgColor="#2D2D2D">
            <Layout>
              <Fill>
                <CodePane
                  lang="jsx"
                  style={{
                    color: `white`,
                    fontSize: `0.9rem`,
                    textAlign: `left`,
                    marginLeft: `-8rem`,
                    marginTop: `-3rem`,
                }}
                source=
{`

class App extends Component {
  componentDidMount() {
    let input$ =
      Observable.fromEvent(document.querySelector('input'), 'input')
        .map(event => event.target.value)
        .filter(value => value.length > 2)
        .debounce(() => Observable.interval(500))
        .flatMap(val => Observable.fromPromise(
          fetch("https://www.reddit.com/r/aww/search.json?q=" + val + "&restrict_sr=on")
            .then(res => res.json())
        ))
        .flatMap(val => Observable.from(val.data.children))

    input$.subscribe(img => {
      this.setState({ images: [img, ...this.state.images] })
    })
  }

  render() {
    return (
      <div>
        <input type="text" />
        {this.state.images}
      </div>
    )
  }
`} />

              </Fill>
              <Fill>
                <Content.Awwsearch4 />
              </Fill>
            </Layout>
          </Slide>

          <Slide transition={["fade"]} bgColor="#2D2D2D">
            <Layout>
              <Fill>
                <CodePane
                  lang="jsx"
                  style={{
                    color: `white`,
                    fontSize: `0.9rem`,
                    textAlign: `left`,
                    marginLeft: `-8rem`,
                    marginTop: `-3rem`,
                }}
                source=
{`

class App extends Component {
  componentDidMount() {
    let input$ =
      Observable.fromEvent(document.querySelector('input'), 'input')
        .map(event => event.target.value)
        .filter(value => value.length > 2)
        .debounce(() => Observable.interval(500))
        .flatMap(val => Observable.fromPromise(
          fetch("https://www.reddit.com/r/aww/search.json?q=" + val + "&restrict_sr=on")
            .then(res => res.json())
        ))
        .flatMap(val => Observable.from(val.data.children))
        .distinct((a, b) => a.data.id === b.data.id)

    input$.subscribe(img => {
      this.setState({ images: [img, ...this.state.images] })
    })
  }

  render() {
    return (
      <div>
        <input type="text" />
        {this.state.images}
      </div>
    )
  }
`} />

              </Fill>
              <Fill>
                <Content.Awwsearch4 />
              </Fill>
            </Layout>
          </Slide>

          <Slide transition={["fade"]} bgColor="#2D2D2D">
            <Layout>
              <Fill>
                <CodePane
                  lang="jsx"
                  style={{
                    color: `white`,
                    fontSize: `0.9rem`,
                    textAlign: `left`,
                    marginLeft: `-8rem`,
                    marginTop: `-3rem`,
                }}
                source=
{`

class App extends Component {
  componentDidMount() {
    let input$ =
      Observable.fromEvent(document.querySelector('input'), 'input')
        .map(event => event.target.value)
        .filter(value => value.length > 2)
        .debounce(() => Observable.interval(500))
        .flatMap(val => Observable.fromPromise(
          fetch("https://www.reddit.com/r/aww/search.json?q=" + val + "&restrict_sr=on")
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
        <input type="text" />
        {this.state.images}
      </div>
    )
  }
`} />

              </Fill>
              <Fill>
                <Content.Awwsearch4 />
              </Fill>
            </Layout>
          </Slide>

          <Slide transition={["fade"]} bgColor="#2D2D2D">
            <Layout>
              <Fill>
                <CodePane
                  lang="jsx"
                  style={{
                    color: `white`,
                    fontSize: `0.9rem`,
                    textAlign: `left`,
                    marginLeft: `-8rem`,
                    marginTop: `-3rem`,
                }}
                source=
{`
class App extends Component {
  componentDidMount() {
    let input$ = Observable.fromEvent(document.querySelector('input'), 'input')

    let image$ = input$...

    let ofFalse$ = input$.map(() => false)
    let appState$ = Observable.merge(ofFalse$, image$)

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
        <input type="text" /> <Loader loading={this.state.loading} />
        {this.state.images}
      </div>
    )
  }
`} />

              </Fill>
              <Fill>
                <Content.Awwsearch5 />
              </Fill>
            </Layout>
          </Slide>

          <Slide transition={["fade"]} bgColor="rgb(74, 22, 84)">
            <Content.Bio />
          </Slide>

        </Deck>
      </Spectacle>
    );
  }
}
