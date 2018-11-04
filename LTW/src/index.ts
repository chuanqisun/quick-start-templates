import {html, render} from 'lit-html';

const template = () => html`<h1>hello world!</h1>`;



const appRoot = document.getElementById('app-root');
render(template(), appRoot!);

debugger;