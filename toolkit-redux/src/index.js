import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import { store } from './store';
import { Provider } from 'react-redux';
import { PokemonApp } from './PokemonApp';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <App /> */}
      <PokemonApp />
    </Provider>
  </React.StrictMode>
);


