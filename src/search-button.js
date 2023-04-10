import { LitElement, html, css } from 'lit';
import "./badges-list.js";

class SearchButton extends LitElement {
  static get properties() {
    return {
      _search: { type: String, reflect: true },
      _query: { type: String, reflect: true }
    }
  }

  search() {
    console.log("update attr");
    document.querySelector('search-button').setAttribute("_search", document.getElementById('select').selectedOptions[0].value);
    document.querySelector('search-button').setAttribute("_query", document.getElementById('query').value);
  }

  // eslint-disable-next-line no-useless-constructor
  constructor() {
    super();
  }

  firstUpdated() {
    // constructor does not have access to dom
    this.shadowRoot.getElementById('search').addEventListener("click", this.search);
  }

  static styles = css`
    button {
      padding: 10px 20px;
      font-size: 16px;
      background-color: #0077cc;
      color: #fff;
      border-radius: 5px;
      border: none;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
      margin-left: 10px;
      cursor: pointer;
    }
    button:hover {
      background-color: #005fa3;
    }
  `;

  render() {
    return html`
    <div>
        <button id="search">Search</button>
    </div>
    `;
  }
}

customElements.define('search-button', SearchButton);