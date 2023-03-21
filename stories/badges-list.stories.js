import { html } from 'lit';
import '../src/badges-list.js';

export default {
  title: 'BadgesList',
  component: 'badges-list',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

function Template({ title, backgroundColor }) {
  return html`
    <badges-list
      style="--badges-list-background-color: ${backgroundColor || 'white'}"
      .title=${title}
    >
    </badges-list>
  `;
}

export const App = Template.bind({});
App.args = {
  title: 'My app',
};
