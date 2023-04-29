export class Section {
  constructor(renderer, selector) {
    this._renderer = renderer;
    this._container = document.querySelector(selector);
  }

  renderItems(items, userId) {
    items.forEach((item) => {
      this._renderer(item, userId);
    });
  }

  addItem(element) {
    this._container.prepend(element);
  }
}
