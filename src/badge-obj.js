import { LitElement, html, css } from 'lit';
// eslint-disable-next-line import/no-extraneous-dependencies
import "@lrnwebcomponents/simple-icon/simple-icon.js";
// eslint-disable-next-line import/no-extraneous-dependencies
import "@lrnwebcomponents/simple-icon/lib/simple-icons.js";

class Badge extends LitElement {
  static properties = {
    header: { type: String },
    department: { type: String },
    name: { type: String },
    author: { type: String },
    icon: { type: String }
  };

  static styles = css`
    @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400&display=swap');

    :host {
      --color-primary: #4e97d1;
      --color-accent: #a3ceef;
    }

    p {
      margin: 0;
      padding-left: 12px;
      font-family: 'Open Sans', sans-serif;
    }

    .badge {
      width: 256px;
      height: 112px;
      outline: solid;
      outline-color: var(--color-primary);
      border-radius: 6px;
      display: flex;
      flex-direction: row;
    }

    .badge .accent {
      width: 12px;
      height: 112px;
      background-color: var(--color-primary);
      border-top-left-radius: 6px;
      border-bottom-left-radius: 6px;
    }
    .badge .content {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    .badge .content .header {
      width: 248px;
      height: 16px;
      background-color: var(--color-accent);
    }
    .badge .content .header p {
      padding-top: 1px;
      font-size: 11px;
      font-weight: 400;
    }

    .badge .content .name p {
      font-size: 20px;
      max-width: 128px;
      font-weight: 300;
    }
    .badge .content .icon img {
      max-width: 54px;
      max-height: 54px;
      padding-right: 12px;
    }

    .badge .content .author p {
      font-size: 12px;
      font-weight: 400;
    }
  `;

  constructor() {
    super();
    this.department = "badge dept";
    this.name = "First Badge";
    this.author = "author1";
    this.icon = "https://cdn-icons-png.flaticon.com/512/9279/9279639.png";
  }

  render() {
    return html`
      <div class="badge">
        <div class="accent"></div>
        <div class="content">
          <div class="header">
            <p>${this.department}</p>
          </div>
          <div
            style="display: flex; flex-direction: row; justify-content: space-between; padding-top: 4px;"
          >
            <div class="name">
              <p>${this.name}</p>
            </div>
            <div class="icon">
              <img
                src="${this.icon}"
                alt="icon"
              />
            </div>
          </div>
          <div class="author">
            <p>${this.author}</p>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('badge-obj', Badge);