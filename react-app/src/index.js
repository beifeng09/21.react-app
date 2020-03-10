// import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// 引入路由
import routes from './router';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(routes, document.getElementById('root'));
registerServiceWorker();
