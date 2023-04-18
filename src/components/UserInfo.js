export default class UserInfo {
  constructor({ name, info, avatar, _id }) {
    this._name = document.querySelector(name);
    this._info = document.querySelector(info);
    this._avatar = document.querySelector(avatar);
    this._id = document.querySelector(_id);
  }

  getUserInfo() {
    return {
      name: this._name.textContent,
      info: this._info.textContent,
    };
  }

  setUserInfo(name, info, avatar, _id) {
    this._name.textContent = name;
    this._info.textContent = info;
    this._avatar.textContent = avatar;
    this._id.textContent = _id;
  }
}
