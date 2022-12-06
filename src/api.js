import axios from 'axios';

const API_URL = import.meta.env.CS_API_URL;
/**
 * Connect with the api
 * @param {string} path
 * @returns
 */
export async function apiGet(path) {
    let URL = `${API_URL}${path ?? ''}`;
    console.log(URL);
    try {
        let response = await axios.get(URL);
        console.log(response.data);
        return response.data;
    } catch (error) {
        return { error };
    }
}

export async function getSignUp(info) {
    try {
        let response = await axios.post(`${API_URL}/users/signup`, {
            info,
        });
        return response.data;
    } catch (err) {
        return err;
    }
}

export async function getLogin(info) {
    try {
        let response = await axios.get(`${API_URL}/users/login`, {
            params: info,
        });

        return response.data;
    } catch (err) {
        return { err };
    }
}
