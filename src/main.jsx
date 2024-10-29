import { createRoot } from 'react-dom/client'
import { createElement } from 'react';
import App from './App'

const root = createRoot(document.querySelector('#root') ?? document.body);
root.render(<App/>);




