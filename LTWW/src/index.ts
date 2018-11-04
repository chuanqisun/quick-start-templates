import './components';

import {html, render} from 'lit-html';

const template = (dir: any) => html`<h1>hello world!</h1><demo-button .flexDirection="${dir}" @onClickFlexDirection="${(e: any) => update(e.detail.direction)}}"></demo-button>`;



const appRoot = document.getElementById('app-root');

render(template('N'), appRoot!);

function update(dir: any) {
    render(template(dir), appRoot!);
}