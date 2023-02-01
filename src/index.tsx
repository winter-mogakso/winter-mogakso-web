import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import App from './App';
import './index.css';

const rootElement = document.getElementById('root');

ReactDOM.render(
    <BrowserRouter>
        <RecoilRoot>
            <App />
        </RecoilRoot>
    </BrowserRouter>,
    rootElement
);
