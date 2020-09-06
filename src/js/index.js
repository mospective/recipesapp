import Search from './models/Search';
import * as searchView from './views/searchView';
import {elements} from './views/base';

// Global state of the app
//  - Search object
//  - Current recipe object
//  - Shopping list object
//  - Liked recipes

const state = {}

const controlSearch = async() => {
    // 1) Get the query from the view
    const query = searchView.getInput();
    
    if (query) {
        // 2. New searh object and add to state
        state.search = new Search(query);

        // 3. Prepare the UI for results
            searchView.clearInput();
            searchView.clearSearchResults();
        // 4. Search for recipes.
        await state.search.getResults();

        // 5. render results on UI
        // console.log(state.search.results);
        searchView.renderResults(state.search.results);
    }
}

elements.searchForm.addEventListener('submit', e => {
    e.preventDefault();
    controlSearch();
});



