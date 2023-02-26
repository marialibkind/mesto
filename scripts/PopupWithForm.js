import { Popup } from "./Popup.js";
export class PopupWithForm extends Popup {
    constructor( handleCardSubmit , selector) {
        super(selector);
        this._handleCardSubmit = handleCardSubmit;
        this._inputList = this._popup.querySelectorAll('.popup__text');
        this._form = this._popup.querySelector('.popup__form');
        this._submitForm = this._submitForm.bind(this);
        console.log(this._form);
    }
    _getInputvalues() {
        this._formValues = {}
        this._inputList.fortach(input => {
            this._formvalues[input.name] = input.value;
        });
        console.log(formValues);
        return this.formValues;
    }

    _submitForm(evt) {

        evt.preventDefault();
        this._handleCardSubmit(this._getInputValues());

    }
    
    setEventListeners() {
        this._form.addEventListener('submit', this._submitForm);
        super.setEventListeners();
    }
    close() {
        this._form.reset();
        super.close()

    }
}

