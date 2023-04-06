export class API {
    constructor(config) {
        this._baseUrl = config.url;
        this._headers = config.headers;
    }
    getUserInfo() {
        return fetch(`${this._baseUrl}/users/me`.{
            headers: this._headers
        })
            .then((res) => {
                return this._checkResponse(res);
            })
    }




















































































    _checkResponse(res) {
        if (res.ok) {
            return res.json()
        }
        return Promise.reject(`Ошибка: ${res.status}`)
    }



























}





