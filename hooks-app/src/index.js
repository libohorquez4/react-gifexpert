import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import { CountApp } from './01-useState/CountApp';
import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook';
import { SimpleForm } from './02-useEffect/SimpleForm';

// import { HooksApp } from './HooksApp';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CounterWithCustomHook />
    <SimpleForm />
  </React.StrictMode>
);


