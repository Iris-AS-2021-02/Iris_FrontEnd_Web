import 'bootstrap/dist/css/bootstrap.min.css';

const url = 'http://ec2-3-91-161-227.compute-1.amazonaws.com:5000'

const Login = async credentials => {

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

    const data = await response.json();
    const token = data.token;
    return token;
}

export default { Login }