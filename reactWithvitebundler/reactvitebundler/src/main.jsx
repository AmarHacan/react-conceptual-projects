import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return (
    <h1>This is coming From myApp Function</h1>
  )
}
const DomElement = {
  type: "a",
  props: {
    href: "www.google.com",
    target: "_blank",
  },
  innerText: "Click Here To Go To Google",
}
const chaielement= "chaiElement ";

const ReactComponent= React.createElement(
  'a',
  {href:'google.com',target:'_blank'},
  'Text for the reactComponent '  
  ,[chaielement, chaielement]);
  


ReactDOM.createRoot(document.getElementById('root')).render(

  ReactComponent


)
