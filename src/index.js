import React from 'react';
import ReactDOM from 'react-dom';
import './tailwind.output.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//Import Redux Components
import {createStore} from 'redux';
import rootReducer from './reducers/index';
import {Provider} from 'react-redux';
const store = createStore(rootReducer);

store.subscribe(()=>
  console.log(store.getState()));

//Instantiate a store for state
//Add Provider so app has access to store.
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
