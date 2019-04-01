import { Repository } from "./models/repository.model";
import { SearchRender } from "./search-render";


export class SearchEngine {

    private SEARCH_API_URL: string = 'https://api.github.com/search/repositories';
    private render: SearchRender;

    constructor() {
        this.render = new SearchRender();
        document.getElementById('search_button').onclick = this.searchButtonClick;
    }


    searchButtonClick = (e:Event) => {
        const searchText = (<HTMLInputElement>document.getElementById('search_input')).value;
        this.doSearch(searchText).then(this.showResults);
    }

    showResults = (results:any) => {
        this.render.render(results.items);
    }

    /**
     * Applies a repository search into github API depending on the searchText
     * @param searchText The text to match with the repositories
     */
    doSearch(searchText: string): Promise<any> {
        return fetch(`${this.SEARCH_API_URL}?q=${searchText}`).then(res => {
            if (!res.ok) {
                throw new Error(res.statusText);
              }
            return res.json();
        });
    }
}