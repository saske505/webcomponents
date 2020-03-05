import { LitElement, html } from 'lit-element';

export default class FilteredContainer extends LitElement {
    render() {
        return html `
         <link rel="stylesheet" href="./components/filteredContainer/filteredContainer.css" />
        
        <div class="container">
         </div>`;
    }
}

customElements.define('m-container', FilteredContainer);