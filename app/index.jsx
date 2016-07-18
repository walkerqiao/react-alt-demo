import React from 'react';
import ReactDOM from 'react-dom';

//import Notes from './components/Notes';
import App from './components/App';

import Provider from './components/Provider';

ReactDOM.render(
    <Provider><App /></Provider>,
    document.getElementById('app')
);
