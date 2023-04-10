/* eslint-disable no-lonely-if */
/* eslint-disable no-restricted-syntax */
import { LitElement, html, css } from 'lit';
import "./badge-obj.js";

class BadgesList extends LitElement {
  static get properties() {
    return {
      badges: { type: Array },
      rand: { type: Number, reflect: true }
    }
  }

  constructor() {
    super();
    this.badges = [];
    this.populate();
  }

  populate() {
    const address = '../api/badges';
        fetch(address).then((response) => {
            if (response.ok) {
                return response.json()
            }
            return [];
        })
        .then((data) => {
            this.badges = data;
        });
  }

  search() {
    const search = document.querySelector('search-button').getAttribute("_search");
    const query = document.querySelector('search-button').getAttribute("_query");
    return this.badges.filter((badge) => {
      // eslint-disable-next-line no-restricted-syntax
      if (search === "all" && query === "")
        return true; 
      if (search === "all") {
        for (const item in badge) {
          if (badge[item].toLowerCase().includes(query.toLowerCase()))
            return true;
        }
      }
      else {
        if (badge[`${search}`].toLowerCase().includes(query.toLowerCase()))
          return true;
      }
      return false;
    });
  }

  static styles = css`
    .results {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      flex-wrap: wrap;
      gap: 10px;  
      margin-left: 10px;
      margin-right: 10px;
    }
  `;

  render() {
    return html`
    <div class="results">
      ${this.search().map(badge => html`
        <badge-obj name="${badge.name}" icon="${badge.icon}" department="${badge.department}" author="${badge.author}"></badge-obj>
      `)}
    </div>
    `;
  }
}

customElements.define('badges-list', BadgesList);