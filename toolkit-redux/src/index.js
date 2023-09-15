import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import { store } from './store';
import { Provider } from 'react-redux';
import { TodoApp } from './TodoApp';
// import { PokemonApp } from './PokemonApp';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <App /> */}
      {/* <PokemonApp /> */}
      <TodoApp />
    </Provider>
  </React.StrictMode>
);


