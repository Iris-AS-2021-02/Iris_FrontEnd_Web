import 'bootstrap/dist/css/bootstrap.min.css';
import { getUserByNumber, createUser } from './graphql';

const url = 'http://host.docker.internal:7000'

const login = async credentials => {

    // const requestBody = {
    //     phone: credentials.phone,
    //     name: credentials.username
    // }

    // const response = await fetch(`${url}/account/login`, {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify(requestBody)
    // });

    // const result = await response.json();
    // const data = result.data;
    // return data;

    const response = await getUserByNumber(credentials.phone);
    if(credentials.username === response.Name)
        return { token: null, user: response };
    else
        return null;
}

const register = async credentials => {

    const requestBody = {
        phone: credentials.phone,
        name: credentials.username
    }

    // const response = await fetch(`${url}/account/register`, {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify(requestBody)
    // });

    // const result = await response.json();
    // const data = result.user;
    // return data;

    const response = await createUser(requestBody);
    if(response.ID != null)
        return response;
    else
        return null;
}

export { login, register }