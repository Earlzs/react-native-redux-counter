import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Home from './index';
import store from './store/index.js';

export default class App extends Component {
  render() {
    return (
      //用官方提供<Provider />组件包裹住 然后将store传入,以此完成一个循环
      <Provider store={store}>
        <Home />
      </Provider>
    );
  }
}