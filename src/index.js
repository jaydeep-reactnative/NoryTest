import { ColorModeScript } from '@chakra-ui/react';
import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import App from './App/App';
import { Provider } from 'react-redux'
import { store } from './state';

ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <ColorModeScript/>
      <App />
    </Provider>
  </StrictMode>,
  document.getElementById('root')
);
