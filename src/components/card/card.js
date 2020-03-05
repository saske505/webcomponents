// Import the LitElement base class and html helper function
import { LitElement, html } from "lit-element";

// Extend the LitElement base class
export default class Card extends LitElement {
    static get properties() {
        return { isLoading: { type: Boolean } };
    }
    set prop(val) {
        let oldVal = this._isLoading;
        this._prop = val;
        this.requestUpdate("isLoading", oldVal);
    }
    get prop() {
        return this._prop;
    }

    constructor() {
        super();

        this.addEventListener('load-complete', async(e) => {
            await this.requestUpdate();
        });

        this._isLoading = true;
        this.htmlTag = "m-card";
        this.loadingTemplates = [
            html `
        <div class="comment animate w20"></div>
        <div class="gap"></div>
        <div class="comment animate w20"></div>
      `,
            html `
        <div class="profilePic animate"></div>
        <div class="gap"></div>
        <div class="comment animate w20"></div>
      `,
            html `
        <div class="iconPic animate"></div>
        <div class="gap-middle"></div>
        <div class="comment animate w20"></div>
        <div class="gap"></div>
        <div class="iconPic animate"></div>
        <div class="gap-middle"></div>
        <div class="comment animate w20"></div>
      `,
            html `
        <div class="profilePic animate"></div>
        <div class="gap"></div>
        <div class="comment animate w20"></div>
      `,
            html `
        <div class="buttonsPic animate "></div>
        <div class="buttonsPic animate "></div>
      `
        ];
    }
    render() {
            return html `
      <link rel="stylesheet" href="./components/card/card.css" />
      <!-- template content -->
      <div class="card panel-body-loader wrapper">
        <div class="card-body container">
        ${this._isLoading
            ? this.loadingTemplates.map(
                item =>
                html`
                    <div class="item">${item}</div>
                `
            )
            : "test"}
        </div>
    </div>      
    `;
    }
    updated(changedProperties) {
        changedProperties.forEach((oldValue, propName) => {
            console.log(`${propName} changed. oldValue: ${oldValue}`);
        });
        let b = this.shadowRoot.getElementById('b');
    }
}
// Register the new element with the browser.
customElements.define("m-card", Card);