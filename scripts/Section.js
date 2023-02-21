export class Section {
    constructor({ items, renderer }, selector) {
        this._items = items;
        this._renderer = renderer;
        this._container = document.querySelector(selector);
    }

    renderItems() {
        this._items.forEach((item) => {
            this.addItem(this._renderer(item));
            this._renderer(item)
        });
    }

    addItem(element) {
        this._container.append(element);
     
    }

}
