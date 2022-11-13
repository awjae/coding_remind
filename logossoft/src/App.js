import Home from './pages/Home.js';
import Service from './pages/Service.js';
import Intro from './pages/Intro.js';
import Partner from './pages/Partner.js';

import { initRouter } from './utils/Router.js';

export default function App ({ target }) {
  this.route = () => {
    this.cleanup();

    const { pathname } = location

    switch (pathname) {
      case "/" : 
          new Home({ target });
        return 
      case "/service" :
          new Service({ target });
        return
      case "/intro" :
          new Intro({ target });
        return
      case "/partner" :
          new Partner({ target });
        return
      default :
          new Home({ target });
        return 
    }
  }

  this.cleanup = () => {
    target.innerHTML ="";
  }

  initRouter(this.route);
  this.route();
}