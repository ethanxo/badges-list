import { LitElement, html, css } from 'lit';
import "./badges-list.js";

class SearchButton extends LitElement {
  static properties = {
    header: { type: String }
  }

  constructor() {
    super();
    this.populate(null, null);
  }

  search(query, type) {
    this.badges = [];
    if (type === "name") {
        //
    }
    else if (type === "category") {
        //
    }
    else if (type === "department") {
        //
    }
    else {
        // 
    }
    this.badges.append(null);
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