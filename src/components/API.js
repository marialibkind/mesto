export default class API {
    constructor(config) {
        this._baseUrl = config.url;
        this._headers = config.headers;
        console.log(this._baseUrl, this._headers)
    }
    getUserInfo() {
        return fetch(`${this._baseUrl}/users/me`, {
            headers: this._headers
        })
            .then((res) => {
                return this._checkResponse(res);
            })
    }

    _checkResponse(res) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`)
    }

    getInitialCards() {
        return fetch(`${this._baseUrl}/cards`, {
            headers: this._headers
        })
            .then((res) => {
                return this._checkResponse(res);
            })
    }

    setUserInfo(name, about) {
        return fetch(`${this._baseUrl}/users/me`, {
            headers: this._headers,
            method: 'PATCH',
            body: JSON.stringify({
                name: name,
                about: about,
            })
        })
            .then((res) => {
                return this._checkResponse(res);
            })
    }

    addCard(name, link) {
        return fetch(`${this._baseUrl}/cards`, {
            headers: this._headers,
            method: 'POST',
            body: JSON.stringify({
                name: name,
                link: link,
            })
        })
            .then((res) => {
                return this._checkResponse(res);
            })
    }

    addLike(cardId) {
        return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
            headers: this._headers,
            method: 'PUT',

        })
            .then((res) => {
                return this._checkResponse(res);
            })
    }


    deleteLike(cardId) {
        return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
            headers: this._headers,
            method: 'DELETE',

        })
            .then((res) => {
                return this._checkResponse(res);
            })
    }

    setAvatar(urlAvatar) {
        //console.log(urlAvatar);
        return fetch(`${this._baseUrl}/users/me/avatar`, {
            headers: this._headers,
            method: 'PATCH',
            body: JSON.stringify(
                urlAvatar
            )

        })
            .then((res) => {
                return this._checkResponse(res);
            })

    }

    deleteCard(cardId) {
        return fetch(`${this._baseUrl}/cards/${cardId}`, {
            headers: this._headers,
            method: 'DELETE',

        })
            .then((res) => {
                return this._checkResponse(res);
            })
    }


}






