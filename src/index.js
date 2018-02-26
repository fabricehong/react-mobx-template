import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'mobx-react';
import myStore from './stores/myStore';

const stores = {
    myStore
};

ReactDOM.render(
    <Provider {...stores} >
        <App />
    </Provider>
, document.getElementById('root'));
registerServiceWorker();
