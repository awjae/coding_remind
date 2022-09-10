export default function ImageView({ url }) {
  this.render = () => {
      const section = document.createElement('section');
      section.className = 'ImageViwer__wrapper';
      section.innerHTML = `
      <div class="ImageViewer">
          <div class="content">
              <img src="https://fe-dev-matching-2021-03-serverlessdeploymentbuck-t3kpj3way537.s3.ap-northeast-2.amazonaws.com/public${url}">
          </div>
      </div>
      `;
      this.el = section;
      document.body.appendChild(section);
      this.el.addEventListener('click', (e) => {
          e.target.hasChildNodes() ? this.el.remove() : undefined;
      })
  }
  this.render(url);

  window.addEventListener('keyup', (e) => {
      console.log(e.key)
      if (e.key === "Escape") {
          this.el.remove();
      }
  })
}