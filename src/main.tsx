import { render } from 'solid-js/web';
import 'solid-devtools'

import App from './App';

const app = document.getElementById('app');

if (app) {
    render(() => <App />, app);
}