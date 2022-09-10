export default function Breadcrumb({ 
  target,
  path,
  pathName
}) {
  this.el = target.querySelector('.Breadcrumb');
  
  this.render = (arr) => {
      console.log(arr);
      this.el.innerHTML = '';
      arr.forEach(path => {
          const div = document.createElement('div');
          div.innerText = path || "root";
          this.el.appendChild(div);
      })
  }

  this.render(pathName);
}