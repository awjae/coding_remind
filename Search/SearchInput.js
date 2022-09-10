export default function SearchInput({target, initState, onChange}) {
  this.el = document.createElement('form');
  this.el.className = 'SearchInput';
  this.state = initState;
  target.appendChild(this.el);

  this.render = () => {
    this.el.innerHTML = `
      <input class="SeachInput__input" type="text" placeholder="검색어를 입력하세요." value="${this.state}">
    `;
  }

  this.render();

  this.el.addEventListener('keyup', (e) => {
    const actionIgnoreKeys = ['Enter', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'];

    if (!actionIgnoreKeys.includes(e.key)) {
      onChange(e.target.value);
    }
  })

  this.el.addEventListener('submit', (e) => {
    e.preventDefault();
  })

  this.el.focus();
}