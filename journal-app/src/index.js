// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './styles.css';
// import { JournalApp } from './JournalApp';
// import { BrowserRouter } from 'react-router-dom';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <JournalApp />
//     </BrowserRouter>
//   </React.StrictMode>
// );





import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';
import { JournalApp } from './JournalApp';
import { BrowserRouter } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <ThemeProvider theme={theme}>

      <CssBaseline />
      <BrowserRouter>
        <JournalApp />
      </BrowserRouter>
    </ThemeProvider>

  </React.StrictMode>

);


