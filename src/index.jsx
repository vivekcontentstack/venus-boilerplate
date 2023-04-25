import React from 'react';
import ReactDOM from 'react-dom';
import App from './modules/App';

const container = document.getElementById('root');

// create a root
const root = ReactDOM.createRoot(container);

//render app to root
root.render(<App />);