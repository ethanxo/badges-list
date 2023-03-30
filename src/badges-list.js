import { LitElement, html, css } from 'lit';
import "./badge-obj.js";

class BadgesList extends LitElement {
  static get properties() {
    return {
      badges: { type: Array }
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
      ${this.badges.map(badge => html`
        <badge-obj name="${badge.name}" icon="${badge.icon}" category="${badge.category}" department="${badge.department}"></badge-obj>
      `)}
    </div>
    `;
  }
}

customElements.define('badges-list', BadgesList);