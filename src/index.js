import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

export const rootNode = document.getElementById('root')

ReactDOM.render(<App />, rootNode);
registerServiceWorker();
