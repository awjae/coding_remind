const MAX_DISPLAY_COUNT = 5;

export default function SelectedLanguage({
  target,
  initialState
}) {
  this.el = document.createElement('div');
  this.el.className = 'selectedLanguage';
  this.state = initialState;

  target.appendChild(this.el);

  this.setState = (nextState) => {
    this.state = nextState;
    if (this.state.length > MAX_DISPLAY_COUNT) {
      const startPosition = this.state.length - MAX_DISPLAY_COUNT;
      this.state = this.state.slice(startPosition, MAX_DISPLAY_COUNT + startPosition)
    }

    this.render();
  }

  this.render = () => {
    this.el.innerHTML = `
      <ul>
        ${this.state.map((item) => `
          <li>${item}</li>
        `).join('')}
      </ul>
    `;
  }

  this.render();
}