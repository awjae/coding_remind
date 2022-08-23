export default function Loading() {
  this.render = () => {
      const div = document.createElement('div');
      div.innerHTML = `
      <div class="Modal Loading">
          <div class="content">
              <img src="./assets/nyan-cat.gif">
          </div>
      </div>
      `;
      this.el = div;
      document.body.appendChild(this.el);
  }
  this.delete = () => {
      this.el.remove();
  }
  this.render();
}