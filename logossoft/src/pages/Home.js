import TopNav from '../components/TopNav.js';
import MainBanner from '../components/MainBanner.js';

export default function Home({target}) {
  
  this.render = () => {
    new TopNav({ target, initState: { menu: "home"} });
    new MainBanner({ target });
  }
  this.render();
}