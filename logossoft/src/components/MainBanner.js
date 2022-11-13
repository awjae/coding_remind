export default function MainBanner({target, initState}) {
  this.element = document.createElement('section');
  this.element.className = "mainBanner";
 
  for(let i = 1; i <= 4; i++) {
    const img = document.createElement('img');
    img.src = `/assets/images/banner_${i}.jpg`;
    img.alt = '배너이미지';
    this.element.appendChild(img);
  }

  /* 소개말 */
  const intro = document.createElement('section');
  intro.className = 'mainBanner-intro';
  intro.innerHTML = `<h1>IT Consulting & Services</h1>
  <div><strong>㈜로고스소프트</strong>은 차별화된  컨설팅 서비스, 품질관리 솔루션, 소프트웨어 테스팅 서비스 및 SW품질관리 전문교육 사업을 통하여 고객의 소프트웨어  Needs를 만족시키는 최고의 소프트웨어  전문 컨설팅 기업입니다.</div>`;
  this.element.appendChild(intro);

  this.render = () => {
    target.appendChild(this.element);
  }
  this.render();
}