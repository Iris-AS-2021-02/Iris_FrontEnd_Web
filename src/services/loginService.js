import 'bootstrap/dist/css/bootstrap.min.css';

const url = 'http://localhost:7000'

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

export { login }