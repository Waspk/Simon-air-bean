import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from "redux-thunk";
import reportWebVitals from './reportWebVitals';
import './index.css';
import App from './App';
import {cartReducer} from './reducers/cartReducer';
import {navReducer} from './reducers/navReducer';
import {orderReducer} from './reducers/orderReducer';
import {productsReducer} from './reducers/productsReducer';
import {loadFromLocalStorage, saveToLocalStorage} from './components/localStorage';


const reducer = combineReducers({
  'cart': cartReducer,
  'order': orderReducer,
  'productsItems': productsReducer,
  'nav': navReducer
})

const persistedState = loadFromLocalStorage();

const store = createStore(reducer, persistedState, compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));

store.subscribe(() => {
  saveToLocalStorage({cart : store.getState().cart});
});

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}>
    <App />
    </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
