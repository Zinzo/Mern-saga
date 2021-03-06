import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { 
  BrowserRouter as Router, 
} from 'react-router-dom';
import router from './router';

const App = ({store}) => {
  return (
    <Provider store={store}>
      <div className="App">
        {router}
      </div>
    </Provider>
  );
}

App.propTypes = {
  store: PropTypes.object.isRequired
}

export default App;
