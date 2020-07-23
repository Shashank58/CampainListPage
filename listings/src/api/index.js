const BASE_URL = "https://reqres.in/api/";

export default class Api {
  static get(url) {
    return this._xhr(BASE_URL + url);
  }

  static put(url) {
    return this._xhr(BASE_URL + url);
  }

  static delete(url) {
    return this._xhr(BASE_URL + url);
  }

  static _xhr(url) {
    return new Promise((res, rej) => {
      fetch(url).then(r => r.json()).then(r => res(r)).catch(e => rej(e));
    })
  }
}
