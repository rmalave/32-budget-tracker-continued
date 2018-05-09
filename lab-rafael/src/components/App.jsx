import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';

import combinedReducer from '../reducers/';
const store = createStore(combinedReducer);

import MainPage from './MainPage.jsx';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Route exact path='/' component={MainPage} />
        </BrowserRouter>
      </Provider>
    )
  }
};
