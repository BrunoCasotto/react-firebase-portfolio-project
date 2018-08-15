import React from 'react';
import ReactDOM from 'react-dom';
import '_styles/global.scss'
import '_styles/reset.scss'
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
