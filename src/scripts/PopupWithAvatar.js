// import { Popup } from "./Popup.js";
// export class PopupWitAvatar extends Popup {
//   constructor(setAvatar, selector) {
//     super(selector);
//     this._form = this._popup.querySelector(".popup__form");
//     // this._submitForm = this._submitForm.bind(this);
//     this._avatar = this._avatar.bind(this);
//     this._setAvatar = setAvatar;
//     this._link = link;
//   }

//   open(card, cardId) {
//     super.open();
//     this._card = card;
//     this._cardId = cardId;
//   }

//   _set(evt) {
//     evt.preventDefault();
//     this._setAvatar(this._link);
//     // console.log(this._card);
//   }

//   setEventListeners() {
//     this._form.addEventListener("submit", this._avatar);
//     super.setEventListeners();
//   }

//   removeEventListeners() {
//     super.removeEventListeners();
//     this._form.removeEventListener("submit", this._avatar);
//   }
// }
