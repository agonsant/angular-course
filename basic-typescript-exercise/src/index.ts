import { SearchEngine } from "./search-engine";

declare global {
    interface Window { init: () => void; }
}

window.init = window.init || function() {
    let searchEngine = new SearchEngine();
};

