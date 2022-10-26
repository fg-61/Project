import { API_URL } from "../env/config"

export const baseManager = {

    getAll: async (url) => {

        let response = []
        await fetch(API_URL + url)
            .then(res => res.json())
            .then((data) => {
                response = data;
            });
        return response;
    },

    getById: async (url) => {

        let response = {}
        await fetch(API_URL + url)
            .then(res => res.json())
            .then((data) => {
                response = data;
            });
        return response;
    },

    add: async (url, data) => {

        let response = {};
        let requestOptions = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }


        await fetch(API_URL + url, requestOptions)
            .then(res => res.json())
            .then((data) => {
                response = data;
            });

        return response;

    },

    delete: async (url) => {

        let response = {};

        let requestOptions = {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }

        await fetch(API_URL + url, requestOptions)
            .then(res => res.json())
            .then((data) => {
                response = data;
            });

        return response;
    },

    update: async (url, data) => {
        let response = {};
        let requestOptions = {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }

        await fetch(API_URL + url, requestOptions)
            .then(res => res.json())
            .then((data) => {
                response = data;
            })
        return response;
    }
}

