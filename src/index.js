import React from 'react';
import { render } from 'react-dom';
import App from './App';
import './index.css';
import './mystyles.scss';

const renderApp = () => {
    render(
        <App />,
        document.getElementById('app')
    );
}

renderApp();

window.addEventListener('resize', () => renderApp())