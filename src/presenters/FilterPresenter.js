export default class FilterPresenter {
    constructor(model, view, onFilterChange) {
        this.model = model;
        this.view = view;
        this.onFilterChange = onFilterChange;

        this.view.bindFiltersChange(this.handleFiltersChange.bind(this));
    }

    handleFiltersChange() {
        const { genre, searchQuery } = this.view.getFilters();
        this.model.setFilters(genre, searchQuery);
        this.onFilterChange();
    }
}
