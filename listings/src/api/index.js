const BASE_URL = "https://reqres.in/api/";

export default class Api {
  static get(url) {
    return this._xhr(BASE_URL + url, "GET");
  }

  static put(url, body) {
    return this._xhr(BASE_URL + url, "PUT", body);
  }

  static delete(url) {
    return this._xhr(BASE_URL + url, "DELETE");
  }

  static _xhr(url, method, body) {
    return new Promise((res, rej) => {
      fetch(url, {
        method,
        body
      }).then(r => {
        if (r.status === 204) {
          return r;
        }
        return r.json()
      }).then(r => res(r)).catch(e => rej(e));
    })
  }
}
