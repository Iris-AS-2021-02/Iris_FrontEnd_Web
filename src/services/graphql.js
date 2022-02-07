const url = 'https://localhost:5000/graphql';

const buildRequest = async (query, token) => {
    const response = await fetch(url, {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + token,
        },
        body: JSON.stringify({ query: query })
    });
    const result = await response.json();
    return result;
}

const getUserByNumber = async (phone, token) => 
{
    const query = `query {
        usersByNumber (number: "${phone}"){
            Name
            Number
        }
    }`;

    const response = await buildRequest(query, token);
    const data = response.data?.usersByNumber;
    return data;
};

const getContactsByUserId = async (userId, token) => 
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

    const response = await buildRequest(query, token);
    const data = response.data?.contactsByUserId;
    return data;
};

const setContactSettings = async (contactId, blocked, seeStatus, uRIWallpaper, extension, removeCurrentWallpaper, token) => 
{
    const mutation = `mutation {
        setSettings(contactSettings: {
          contactID: "${contactId}"
          blocked: ${blocked}
          seeStatus: ${seeStatus}
          uRIWallpaper: "${uRIWallpaper}"
          extension: "${extension}"
          removeCurrentWallpaper: ${removeCurrentWallpaper}
        }){
          contactID
          blocked
          seeStatus
          wallpaper
        }
    }`;

    const response = await buildRequest(mutation, token);
    const data = response.data?.setSettings;
    return data;

}

export { getUserByNumber, getContactsByUserId, setContactSettings }