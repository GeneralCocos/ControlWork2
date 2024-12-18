import { Observable } from "../framework/observable.js";

export default class FilterModel extends Observable {
    constructor() {
        super();
        this.filters = { genre: '', searchQuery: '' };
    }

    setFilters(genre, searchQuery) {
        this.filters = { genre, searchQuery };
        this.notify(this.filters);
    }
}
