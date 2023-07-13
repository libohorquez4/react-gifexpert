import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks';
// import { CountApp } from './01-useState/CountApp';
// import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook';
// import { SimpleForm } from './02-useEffect/SimpleForm';
// import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook';

// import { HooksApp } from './HooksApp';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <CounterWithCustomHook />
    <FormWithCustomHook /> */}
    <MultipleCustomHooks />
  </React.StrictMode>
);


