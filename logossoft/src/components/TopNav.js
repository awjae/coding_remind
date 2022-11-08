export default function TopNav ({target, initState}) {
  this.element = document.createElement('nav');
  this.element.innerHTML = `<div>
      <img src="https://static.wixstatic.com/media/7ad5a9_bb943896f9374e82a5ca00b3660015f8~mv2.jpg/v1/fill/w_226,h_56,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/%EB%A1%9C%EA%B3%A0%EC%8A%A4%EC%86%8C%ED%94%84%ED%8A%B8%20%EB%A1%9C%EA%B3%A0%EC%9D%B4%EB%AF%B8%EC%A7%80_JPG.jpg" alt=""/>
    </div>
    <div>
      <ul>
        <li>서비스</li>
        <li>기업 소개</li>
        <li>파트너</li>
      </ul>
    </div>`;

  this.render = () => {
    target.appendChild(this.element);
  }

  this.render();
}

