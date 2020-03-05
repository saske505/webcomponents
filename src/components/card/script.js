// Import the LitElement base class and html helper function
import { LitElement, html } from 'lit-element';

// Extend the LitElement base class
export default class Card extends LitElement {

    /**
     * Implement `render` to define a template for your element.
     *
     * You must provide an implementation of `render` for any element
     * that uses LitElement as a base class.
     */
    render() {
        /**
         * `render` must return a lit-html `TemplateResult`.
         *
         * To create a `TemplateResult`, tag a JavaScript template literal
         * with the `html` helper function:
         */
        return html `
         <link rel="stylesheet" href="./style.scss">
      <!-- template content -->
      <p>A paragraph</p>
    `;
    }
}
// Register the new element with the browser.
customElements.define('m-card', Card);