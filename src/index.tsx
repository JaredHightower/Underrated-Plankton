import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { MantineProvider } from '@mantine/core'
import { ParallaxProvider } from 'react-scroll-parallax'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <MantineProvider>
    <ParallaxProvider>
      <App />
    </ParallaxProvider>
  </MantineProvider>
)
