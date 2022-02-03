const url = 'http://34.67.250.175:5000/graphql';

const buildRequest = async (query/*, token*/) => {
    const response = await fetch(url, {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json'/*,
          'Authorization': 'Bearer ' + token*/
        },
        body: JSON.stringify({ query: query })
    });
    const result = await response.json();
    return result;
}

const getUserByNumber = async (phone/*, token*/) => 
{
    const query = `query {
        usersByNumber (number: "${phone}"){
            ID
            Name
            Number
        }
    }`;

    const response = await buildRequest(query/*, token*/);
    const data = response.data?.usersByNumber;
    return data;
};

const getContactsByUserId = async (userId/*, token*/) => 
{
    const query = `query {
        contactsByUserId(userId: "${userId}") {
            contactID
            userID
            contactPhone
            contactName
            blocked
            seeStatus
            wallpaper
        }
    }`;

    const response = await buildRequest(query/*, token*/);
    const data = response.data?.contactsByUserId;
    return data;
};

const createUser = async (credentials/*, token*/) => 
{
    const query = `mutation {
        createUser(userAuth: {
            Name: "${credentials.name}",
            Number:"${credentials.phone}"
        }){
            ID
            Name
            Number
        }
    }`;

    const response = await buildRequest(query/*, token*/);
    const data = response.data?.createUser;
    return data;
};

export { getUserByNumber, getContactsByUserId, createUser }