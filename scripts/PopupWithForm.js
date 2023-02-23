import { Popup } from "./Popup.js";
export class PopupWithForm extends Popup {
    constructor( { formSubmit }, selector) {
    super(selector);
    this._formsubmit = formSubmit;
    this._inputList = this._popup.queryselectorAll('.popup__text');
    this._form = this.popup.queryselector('.form-add');
    }
     _getInputvalues() {
    this._formvalues = {}
    this._inputList.fortach(input => {
    this._formvalues[input.name] = input.value;
     });

    return this.formValues;
    }
    setEventListeners() {
    this._popup.addEventListener ('submit', (evt) => {
     evt.preventDefault();
     this._formSubmit(this._getInputValues());
    })
        super.setEventListeners()
 }
    close() {
    this._form.reset();
    super.close()
    
    }
}

