import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';

const reactElement = {
  type: 'a',
  props: {
    href: 'https://google.com',
    target: '_blank',
  }, // attributes
  childern: 'Click me to visit people',
};

function MyApp() {
  return (
    <div>
      <h1>Custom React app</h1>
    </div>
  );
}

const areactElement = React.createElement(
  'a',
  { href: 'https://google.com', target: '_blank' },
  'click to visit google'
);
const AnotherElement = (
  <a href="http://google.com" target="_blank">
    Google
  </a>
);

createRoot(document.getElementById('root')).render(
  <>
  {areactElement}
  <App />
   {/* reactElement
   AnotherElement
   <MyApp /> */}
  </>
)
