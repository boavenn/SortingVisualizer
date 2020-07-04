import React from 'react';
import { render } from 'react-dom';
import App from './App';
import './styles.css'

const renderApp = () => {
    render(
        <App />,
        document.getElementById('app')
    );
}

renderApp();

window.addEventListener('resize', () => renderApp())