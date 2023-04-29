export default class UserInfo {
  constructor({ name, info, avatar }) {
    this._name = document.querySelector(name);
    this._info = document.querySelector(info);
    this._avatar = document.querySelector(avatar);
  }

  getUserInfo() {
    return {
      name: this._name.textContent,
      info: this._info.textContent,
    };
  }

  getId() {
    return this._id;
  }

  setUserInfo(name, info, _id) {
    this._name.textContent = name;
    this._info.textContent = info;
    this._id = _id;
  }
  setUserAvatar(avatar) {
    this._avatar.src = avatar;
  }

}
