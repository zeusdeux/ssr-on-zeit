import React from 'react'
import ReactDomServer from 'react-dom/server'
import App from './views/App'
import { StaticRouter } from 'react-router-dom'

export default function requestHandler({ url }, res) {
  const ctx = {}
  const markup = ReactDomServer.renderToString(
    <StaticRouter location={url} context={ctx}>
      <Index />
    </StaticRouter>
  )

  if (ctx.url) {
    res.writeHead(301, {
      Location: ctx.url
    })
    res.end()
  } else {
    res.writeHead(ctx.statusCode || 200, {
      'Content-Type': 'text/html'
    })
    res.end(markup)
  }
}

function Index({ title, app }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Zeit + React + Webpack + SSR</title>
        <link rel="preload" href="/app.css" as="style" />
        <link rel="preload" href="/app.js" as="script" />
        <link rel="preload" href="https://buttons.github.io/buttons.js" as="script" />
        <link rel="stylesheet" href="/app.css" />
        <script src="/app.js" defer></script>
        <script src="https://buttons.github.io/buttons.js" defer></script>
      </head>
      <body>
        <main>
          <App />
        </main>
      </body>
    </html>
  )
}
