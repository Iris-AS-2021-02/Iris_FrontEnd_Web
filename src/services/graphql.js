const url = 'http://ec2-3-91-161-227.compute-1.amazonaws.com:5000/graphql';

let options = {
    method: 'POST', 
    headers: {
      'Content-Type': 'application/json'
    },
    body: ''
};

const buildRequest = async (query) => {
    options.body = JSON.stringify({ query: query });

    const response = await fetch(url, options);
    const result = await response.json();
    return result;
}

const getUserByNumber = async (phone) => 
    {
        const query = `query {
            usersByNumber (number: "${phone}"){
                Name
                Number
            }
        }`;

        const response = await buildRequest(query);
        const data = response.data?.usersByNumber;
        return data;
    };

export { getUserByNumber }