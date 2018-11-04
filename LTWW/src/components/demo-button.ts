import {html, render} from 'lit-html';

class FlexBoxConfig extends HTMLElement {
  public set flexDirection(dir: any) { this._flexDirection = dir; render(this.template(), this.shadowRoot!); }
  private _flexDirection: '-' | 'Z' | '|' | 'N' = '-';

  private template = () => html`
    <style>
    .dice-button {
      background-color: transparent;
      border: 1px solid lightblue;
      font-size: 12px;
    }

    .dice-button--selected {
      background-color: lightblue;
    }

    </style>
    <button class="dice-button ${this._flexDirection === '-' ? 'dice-button--selected' : ''}" @click="${() => this.onClickFlexDirection('-')}">-</button>
    <button class="dice-button ${this._flexDirection === 'Z' ? 'dice-button--selected' : ''}" @click="${() => this.onClickFlexDirection('Z')}">Z</button>
    <button class="dice-button ${this._flexDirection === '|' ? 'dice-button--selected' : ''}" @click="${() => this.onClickFlexDirection('|')}">|</button>
    <button class="dice-button ${this._flexDirection === 'N' ? 'dice-button--selected' : ''}" @click="${() => this.onClickFlexDirection('N')}">N</button>
  `;
  private demo = 42;

  constructor() {
    // Always call super first in constructor
    super();

    this.attachShadow({mode: 'open'});
  }

  connectedCallback() {
    render(this.template(), this.shadowRoot!);
  }

  onClickFlexDirection(dir: '-' | 'Z' | '|' | 'N') {
    console.dir(dir);
    this.dispatchEvent(new CustomEvent('onClickFlexDirection', {detail: {direction: dir}, bubbles: false}));
  }
}

customElements.define('demo-button', FlexBoxConfig);