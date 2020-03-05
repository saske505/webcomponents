import { LitElement, html } from 'lit-element';

export default class FilteredContainer extends LitElement {
    render() {
        return html `<div class="container">
         </div>`;
    }
}

customElements.define('m-filteredContainer', FilteredContainer);