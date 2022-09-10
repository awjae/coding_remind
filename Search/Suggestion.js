export default function Suggestion({
  target,
  initalState,
  onSelect
}) {
  this.el = document.createElement('div');
  this.el.className = 'Suggestion';
  target.appendChild(this.el);

  this.state = {
    selectedIndex: 0,
    items: initalState.items
  };

  this.setState = (nextState) => {
    this.state = {
      ...this.state,
      ...nextState
    };
    this.render();
  }

  this.render = () => {
    const { items = [], selectedIndex } = this.state;
    console.log(this.state)
    if (items.length > 0) {
      this.el.style.display = 'block';
      this.el.innerHTML = `
        <ul>
          ${items.map((item, idx) => `
            <li class="${idx === selectedIndex ? 'Suggestion__item--selected' : ''}" data-idx="${idx}"><img src="${item}" alt="img"></li>            
          `).join('')}
        </ul>
      `;
    } else {
      this.el.style.display = 'none';
      this.el.innerHTML = '';
    }   
  }

  this.render();

  window.addEventListener('keyup', (e) => {
    if (this.state.items.length > 0) {
      const { selectedIndex } = this.state;
      const lastIndex = this.state.items.length - 1;
      const navigationKeys = ['ArrowUp', 'ArrowDown', 'Enter'];
      let nextIndex = selectedIndex;
      
      if (navigationKeys.includes(e.key)) {
        if (e.key === 'ArrowUp') {
          nextIndex = selectedIndex === 0 ? lastIndex : nextIndex - 1;
        } else if (e.key === 'ArrowDown') {
          nextIndex = selectedIndex === lastIndex ? 0 : nextIndex + 1;
        } else if (e.key === 'Enter') {
          onSelect(this.state.items[this.state.selectedIndex]);
        } 

        // this.setState({
        //   ...this.state,
        //   selectedIndex: nextIndex
        // })
        this.el.querySelector('.Suggestion__item--selected').classList.remove('Suggestion__item--selected');
        this.state.selectedIndex = nextIndex; 
        this.el.querySelectorAll('li')[this.state.selectedIndex].classList.add('Suggestion__item--selected');
      }
    }
  })

  this.el.addEventListener('click', (e) => {
    const li = e.target.closest('li');
    if (li) {
      const { idx } = li.dataset;
      try {
        onSelect(this.state.items[parseInt(idx)]);
      } catch(e) {
        alert('무언가 잘못됨!')
      }
    }
  })
}