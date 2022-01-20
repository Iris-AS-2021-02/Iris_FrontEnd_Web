import 'bootstrap/dist/css/bootstrap.min.css';
import { getUserByNumber } from '../services/graphql'

const Login = async credentials => {
    const user = await getUserByNumber (credentials.phone);
    if (user.Name !== credentials.username)
        return null;
    
    const token = 'TO DO'

    let response = {
        name: user.Name,
        number: user.Number,
        token: token
    }

    return response;
}

export default { Login };