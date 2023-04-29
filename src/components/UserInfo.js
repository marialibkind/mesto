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
  // getUserAvatar() {
  //   return {
  //     avatar: this._avatar
  //   };
  // }

  setUserInfo(name, info) {
    this._name.textContent = name;
    this._info.textContent = info;

  }
  setUserAvatar(avatar) {
    //console.log(this._avatar.src);
    this._avatar.src = avatar;
  }
}
