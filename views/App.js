import React from 'react'
import { Link, Route, Switch } from 'react-router-dom'
import Box from './Box'
import Nope from './Nope'

export default function App() {
  return (
    <React.Fragment>
      <section>
        <p>
          This is a server side rendered react app written using ES6 modules and bundled using webpack.
          It exposes a single function that is hosted on <a href="https://zeit.co/now" target="_blank" rel="noopener noreferrer">zeit</a>.
          This function is incharge of rendering all supported routes on the server.
        </p>
        <a className="github-button"
         href="https://github.com/zeusdeux/ssr-on-zeit"
         data-size="large"
         aria-label="View zeusdeux/ssr-on-zeit on GitHub"
         >
          View on GitHub
        </a>
      </section>
      <Switch>
        <Route exact path="/" component={_ => <h1>Go ahead and click on a link below</h1>} />
        <Route exact path="/red" render={ _ => <Box color="red" />} />
        <Route exact path="/yellow" render={ _ => <Box color="yellow" />} />
        <Route render={({ staticContext }) => {
          if (staticContext) {
            staticContext.statusCode = 404
          }
          return <Nope />
        }} />
      </Switch>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/red">Red Box</Link>
        <Link to="/yellow">Yellow Box</Link>
      </nav>
    </React.Fragment>
  )
}
