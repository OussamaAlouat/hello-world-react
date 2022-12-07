// 1) Import React and ReactDom libraries
import React from "react";
import ReactDom from 'react-dom/client'
// 2) Get a reference to div with ID root
const element = document.querySelector('#root');

// 3) Tell React to tacke control of that element
const root = ReactDom.createRoot(element);

// 4) Create component

function App() {
  const message ='Hello from React world';

  return (
    <div>
      <h1>Hello world</h1>
      <div>{ message }</div>
    </div>)
}

// 5) Show component on the screen
root.render(<App/>)