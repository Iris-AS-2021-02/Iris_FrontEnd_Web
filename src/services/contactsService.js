import { getContactsByUserId } from "./graphql";

const getContacts = async () => {

    let userId = '';
    let token = '';

    let session = sessionStorage.getItem('session');
    if (session != null){
        let data = JSON.parse(session);
        userId = data?.user?.ID;
        token = data?.token;
    }

    const response = await getContactsByUserId(userId, token);
    return response;
}

export { getContacts }