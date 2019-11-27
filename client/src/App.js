import React from 'react';
import { Component } from 'react'
import './App.css';
import { connect } from 'react-redux'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { Container } from './Components/Container'

const store = configureStore()
export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
    <Container />
      </Provider>
    )
  }
}
  




