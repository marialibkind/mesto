export class Section extends Popup {
    constructor( { items, renderer }, selector) {
    super(selector);
    
   
    }
   
    close() {
    this._form.reset();
    super.close ()
    
    }
}
