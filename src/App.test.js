import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import { BrowserRouter } from 'react-router-dom';
 
import Status from './components/Status';
 
const mockStore = configureStore([]);
 
describe('My Connected React-Redux Component', () => {
  let store;
  let component;
 
  beforeEach(() => {
    store = mockStore({
      cart: {},
    });
 
    component = renderer.create(
      <BrowserRouter>
      <Provider store={store}>
        <Status />
      </Provider>
      </BrowserRouter>
    );
  });
 
  it('should render with given state from Redux store', () => {
    expect(component.toJSON()).toMatchSnapshot();
  });

});