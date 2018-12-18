import React from 'react'
import { Link, Route, Switch } from 'react-router-dom'
import Box from './Box'
import Nope from './Nope'

export default function App() {
  return (
    <React.Fragment>
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
        <Link to="/red">Red Box</Link>
        <Link to="/yellow">Yellow Box</Link>
      </nav>
    </React.Fragment>
  )
}
