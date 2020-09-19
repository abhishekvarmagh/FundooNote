import React from 'react';
import RouterConfiguration from './router/RouterConfiguration';
import { Provider } from 'react-redux';
import store from './redux/store/Store';

function App() {
  return (
    <div>
      <Provider store={store}>
        <RouterConfiguration />
      </Provider>
    </div>
  );
}

export default App;
