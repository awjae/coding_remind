import TopNav from '../components/TopNav.js';

export default function Service({target}) {
  
  this.render = () => {
    const nav = new TopNav({ target, initState: { menu: "service"} });

  }
  this.render();
}