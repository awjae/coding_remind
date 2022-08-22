import SearchInput from "./SearchInput.js";
import Suggestion from "./Suggestion.js";
import SelectedLanguage from "./selectedLanguage.js";
import { fetchedLanguage } from "./api.js";

export default function App({ target }) {
  this.state = {
    fetchedLanguage: [],
    selectedLanguage: [],
  }
  this.timer;

  this.setState = (nextState) => {
    this.state = {
      ...this.state,
      ...nextState
    }
    suggestion.setState({
      selectedIndex: 0,
      items: this.state.fetchedLanguage
    })
    selectedLanguage.setState(this.state.selectedLanguage);
  }
  const selectedLanguage = new SelectedLanguage({
    target,
    initialState: [],
  })

  const searchInput = new SearchInput({ 
    target, 
    initState: '', 
    onChange: async (keyword) => {
      if (keyword.length === 0) {
        this.setState({
          fetchedLanguage: [],
        });
        clearTimeout(this.timer);
      } else {
        if (this.timer) {
          clearTimeout(this.timer);
        }
  
        this.timer = setTimeout(async () => {
          const languages = await fetchedLanguage(keyword);
          this.setState({
            fetchedLanguage: languages.results
          })
        }, 400);
      }
    }
  });

  const suggestion = new Suggestion({
    target,
    initalState: {
      cursor: 0,
      items: []
    },
    onSelect: (item) => {
      alert(item);

      const nextSelectedLangauge = [...this.state.selectedLanguage];

      const index = nextSelectedLangauge.findIndex((selectedLanguage) => selectedLanguage === item);

      if (index > -1) {
        nextSelectedLangauge.splice(index, 1);
      }
      nextSelectedLangauge.push(item);

      this.setState({
        ...this.state,
        selectedLanguage: nextSelectedLangauge
      });
    }
  })
}