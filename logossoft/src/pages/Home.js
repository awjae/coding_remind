import TopNav from '../components/TopNav.js';

export default function Home({target}) {
  
  this.render = () => {
    new TopNav({ target, initState: { menu: "home"} });

  }
  this.render();
}