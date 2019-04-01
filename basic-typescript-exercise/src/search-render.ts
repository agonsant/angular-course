import { Repository } from "./models/repository.model";


export class SearchRender {

    constructor() { }

    render(results: Array<Repository>) {
        this.removeResults();
        const resultsFragments = document.createDocumentFragment();
        const resultsList = document.createElement('ul');
        resultsList.classList.add('search-results-list');
        results.forEach(e => resultsList.innerHTML += this.generateItem(e));
        resultsFragments.appendChild(resultsList);
        document.getElementById('repo_results').appendChild(resultsFragments);
    }

    removeResults(){
        const resultsNode = document.getElementById('repo_results');
        while (resultsNode.firstChild) {
            resultsNode.removeChild(resultsNode.firstChild);
        }
    }

    generateItem(item: Repository) {
        return `<li class="search-results-item">
                  <img width="200" height="200" class="search-result-img" src="${item.owner.avatar_url}"/>
                  <h3 class="search-result-title">${item.name}</h3>
                  <p class="search-result-description" >${item.description}</p>
                </li>`

    }
}