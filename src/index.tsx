import React from 'react';
import ReactDOM from 'react-dom';
import { RouterProvider } from 'react-router5';
import createRouter from 'router5';

import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';


const router = createRouter()

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
