export default function Paging({ target, list }) {
  this.state = {
    currentIdx: 0,
    firstIdx: 1,
    lastIdx: null,
    listCnt: 3,
    totalPage: null,
    data: list,
  }
  this.el = undefined;

  this.setList = () => {
    let ul;
    if (this.el) {
      this.el.innerHTML = ''; 
      ul = this.el;
    } else {
      ul = document.createElement('ul');
      target.appendChild(ul);
    }

    for (let i = (this.state.currentIdx * 3); i < (this.state.currentIdx * 3) + this.state.listCnt; i++) {
      const li = document.createElement('li');
      li.textContent = this.state.data[i];
      this.state.data[i] ? ul.appendChild(li) : undefined;
    }

    this.el = ul;
  }
  this.pagingContainer = () => {
    const div = document.createElement('div');

    for (let i = 1; i <= this.state.totalPage; i++) {
      const page = document.createElement('span');
      page.textContent = i;
      div.appendChild(page);
      page.onclick = () => {
        this.state.currentIdx = i-1;
        this.setList();
      }
    }

    const pprev = document.createElement('span');
    pprev.textContent = '<<';
    const prev = document.createElement('span');
    prev.textContent = '<';
    const next = document.createElement('span');
    next.textContent = '>';
    const nnext = document.createElement('span');
    nnext.textContent = '>>';
    div.prepend(pprev);
    div.prepend(prev);
    div.appendChild(next);
    div.appendChild(nnext);
    target.appendChild(div);
  }

  this.render = () => {
    this.state.totalPage = (this.state.data.length / this.state.listCnt) + 1;
    if (this.state.data.length%this.state.listCnt === 0) {
      this.state.totalPage -= 1;
    }

    this.setList();
    this.pagingContainer();
  }
  this.render();
}