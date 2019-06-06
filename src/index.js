import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';


import rootReducer from './store/rootReducer';
import './index.css';
import App from './App';

const myStore = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(thunk),
  // other store enhancers if any
));

  
const Root = () => (
    <Provider store={myStore}>
      <App />
    </Provider>
  )
  

ReactDOM.render(<Root />, document.getElementById('root'));