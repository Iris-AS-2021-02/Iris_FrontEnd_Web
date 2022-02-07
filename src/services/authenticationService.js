import 'bootstrap/dist/css/bootstrap.min.css';
import { baseURL } from '../config'

const url = baseURL

const login = async credentials => {

    const requestBody = {
        phone: credentials.phone,
        name: credentials.username
    }

    const response = await fetch(`${url}/account/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestBody)
    });

    const result = await response.json();
    const data = result.data;
    return data;
}

const register = async credentials => {

    const requestBody = {
        phone: credentials.phone,
        name: credentials.username
    }

    const response = await fetch(`${url}/account/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestBody)
    });

    const result = await response.json();
    const data = result.user;
    return data;
}
export { login, register }