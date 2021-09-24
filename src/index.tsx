import React from 'react';
import { RouterProvider } from 'react-router5';
import ReactDOM from 'react-dom';
import router from './router';

import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';


router.start(() => {
    ReactDOM.render(
        <RouterProvider router={router}>
             <App />
        </RouterProvider>,
        document.getElementById('root')
    )
})


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
