export default function Nodes({
  target,
  path = [""],
  files = [],
  onClick,
  onPrev
}) {
  this.el = target.querySelector('.Nodes');

  this.render = (files) => {
      this.el.innerHTML = '';
      if (path.length > 1) {
          const div = document.createElement('div');
          div.className = 'Node';
          div.innerHTML = `
              <img src="./assets/prev.png">
          `;
          this.el.appendChild(div);
          div.addEventListener('click', (e) => {
              onPrev(e);
          })
      }
      files.forEach(file => {
          const div = document.createElement('div');
          div.className = 'Node';
          div.dataset.id = file.id;
          div.dataset.type = file.type;
          div.dataset.filePath = file.filePath;
          if (file.type === "DIRECTORY") {
              div.innerHTML = `
                  <img src="./assets/directory.png">
                  <div>${file.name}</div>
              `;
          } else if (file.type === "FILE") {
              div.innerHTML = `
                  <img src="./assets/file.png">
                  <div>${file.name}</div>
              `;
          }
          this.el.appendChild(div);
          div.addEventListener('click', (e) => {
              onClick(e, file.name);
          })
      })
  }

  this.render(files);
}