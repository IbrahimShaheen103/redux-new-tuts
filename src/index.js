//external
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore,applyMiddleware } from "redux";
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
// local 
import App from './App';
import rootReducer from './reducers'
//assets
import './index.css';


const store=createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
)
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);


