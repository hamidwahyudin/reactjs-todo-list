import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import registerServiceWorker from './registerServiceWorker';
import IdeaContainer from './IdeaContainer'

ReactDOM.render(<IdeaContainer />, document.getElementById('root'));
registerServiceWorker();
