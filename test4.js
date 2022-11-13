import { request } from '../utils/Api.js';

export default function Table(target, pagingBtn, dropDown) {
    this.element = document.createElement('table');
    this.element.innerHTML = `
        <thead>
            <th>name</th>
            <th>title</th>
            <th>email</th>
            <th>role</th>
        </thead>
        <colgroup>
            <col width="10%">
            <col width="40%">
            <col width="35%">
            <col width="15%">
        </colgroup>
        <tbody></tbody>
    `;
    this.currentPage = 1;
    this.cnt = 5;
    this.firstPage = 1;
    this.lastPage = "";

    this.setData = async () => {
        const body = this.element.querySelector('tbody');
        body.innerHTML = "";

        const data = await request('/data.json');
        for (let i = this.cnt * (this.currentPage - 1); i < (this.cnt * (this.currentPage - 1)) + this.cnt; i++) {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>${data[i].name}</td>
                <td>${data[i].title}</td>
                <td>${data[i].email}</td>
                <td>${data[i].role}</td>
            `;
            body.appendChild(tr);
        }
        this.data = data;
        this.lastPage = Number.isInteger(data.length/this.cnt) ? parseInt(data.length/this.cnt) : parseInt(data.length/this.cnt) + 1;

        pagingBtn.innerHTML = "";
        const prevArrow = document.createElement('button');
        prevArrow.className = "arrow";
        prevArrow.innerText = '<<';
        const nextArrow = document.createElement('button');
        nextArrow.className = "arrow";
        nextArrow.innerText = '>>';
        pagingBtn.appendChild(prevArrow);
        for (let i = 1; i <= this.lastPage; i++) {
            const button = document.createElement('button');
            button.innerText = i;
            if (i === 1) {
                button.className = 'active';
            }
            pagingBtn.appendChild(button);
        }
        pagingBtn.appendChild(nextArrow);
    }
    this.updateData = () => {
        const body = this.element.querySelector('tbody');
        body.innerHTML = "";

        for (let i = this.cnt * (this.currentPage - 1); i < (this.cnt * (this.currentPage - 1)) + this.cnt; i++) {
            if (!this.data[i]) {
                break;
            }
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>${this.data[i].name}</td>
                <td>${this.data[i].title}</td>
                <td>${this.data[i].email}</td>
                <td>${this.data[i].role}</td>
            `;
            body.appendChild(tr);
        }
        console.log(this.cnt * (this.currentPage - 1), (this.cnt * (this.currentPage - 1)) + this.cnt)
    }

    this.setPagingHandler = () => {
        pagingBtn.addEventListener('click', (e) => {
            if (e.target.className === "arrow") {
                if (e.target.innerText ==="<<") {
                    this.currentPage = 1;
                    this.updateData();
                    pagingBtn.querySelector('.active').classList.remove('active');
                    pagingBtn.querySelectorAll('button')[this.firstPage].classList.add('active');
                    return
                }
                if (e.target.innerText ===">>") {
                    this.currentPage = this.lastPage;
                    this.updateData();
                    pagingBtn.querySelector('.active').classList.remove('active');
                    pagingBtn.querySelectorAll('button')[this.lastPage].classList.add('active');
                    return;
                }
            }
            if (e.target.tagName === "BUTTON") {
                pagingBtn.querySelector('.active').classList.remove('active');
                e.target.classList.add('active');
                this.currentPage = e.target.innerText;
                this.updateData();
            }
        })
    }

    this.setDropDown = () => {
        dropDown.innerHTML = `
            <select>
                <option value="5">5개씩</option>
                <option value="15">15개씩</option>
            </select>
        `;
        dropDown.querySelector('select').addEventListener('change', (e) => {
            this.currentPage = 1;
            this.cnt = parseInt(e.target.value);
            this.setData();
        });
    }

    this.render = () => {
        target.appendChild(this.element);
        this.setData();
        this.setPagingHandler();
        this.setDropDown();
    }

    this.render();
}