import './config/ReactotronConfig';
import React from 'react'; // eslint-disable-line import/first
import { Provider } from 'react-redux'; // eslint-disable-line import/first
import Routes from './navigation';
import store from './store';

const App = () => (
  <Provider store={store}>
    <Routes />
  </Provider>
);

export default App;
