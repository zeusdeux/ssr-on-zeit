import React from 'react'
import ReactDOM from 'react-dom'
import App from './views/App'
import { BrowserRouter } from 'react-router-dom'

// install service worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', async () => {
    const registration = await navigator.serviceWorker.register('/sw.js')
    console.log(`Service worked registered with scope ${registration.scope}`)
  })
}

// hydrate the SSR app on client
ReactDOM.hydrate(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.querySelector('main')
)
