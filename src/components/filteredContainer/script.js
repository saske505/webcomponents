import { LitElement, html } from 'lit-element';

class FilteredContainer extends LitElement {
  render() {
    return html
    `<div class="container">
        container
    </div>`;
  }
}

export customElements.define('m-filteredContainer', FilteredContainer);