import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return (
    <div>
      <h1>Custom App !</h1>
    </div>
  )
}

const reactElement = {
  type : 'a',
  props : {
      href : 'https://google.com',
      target : '_blank'
  },
  children : 'Click me to visit Google'
}

const anotherElement = (
  <a href='https://google.com' target='_blank'>Click me to visit Ankit</a>
)

const AnotherReactElement = React.createElement(
  'a',
  {href:'https://google.com', target:'_blank'},
  'Click to Visit the Link'
)
createRoot(document.getElementById('root')).render(
  // <StrictMode>
  <App/>
  // </StrictMode>,
)
