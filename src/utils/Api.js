export default class Api {
    static #BASE_URL = 'https://jsonplaceholder.typicode.com';
    static #delay = 250;
    static #fetch = (url) => fetch(this.#BASE_URL + url).then((r) => r.json());

    static getUsers = () =>
        this.#fetch('/users').then(
            (u) =>
                new Promise((res) => {
                    setTimeout(() => res(u), this.#delay);
                })
        );
    static getAlbums = () =>
        this.#fetch('/albums').then(
            (u) =>
                new Promise((res) => {
                    setTimeout(() => res(u), this.#delay);
                })
        );

    static getPhotos = () =>
        this.#fetch("/photos").then(
            (u) =>
                new Promise((res) => {
                    setTimeout(() => res(u), this.#delay);
                })
        )
}