import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {store} from './app/store'
import { Provider } from 'react-redux';


// BOOTSTRAP CONFIGURATION
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/react-bootstrap/dist/react-bootstrap';
import { extendedApiSlice } from './features/posts/postsSlice';

store.dispatch(extendedApiSlice.endpoints.getAllProducts.initiate());
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.Fragment>
    <Provider store={store}>
    <App />
    </Provider>
    </React.Fragment>
);

