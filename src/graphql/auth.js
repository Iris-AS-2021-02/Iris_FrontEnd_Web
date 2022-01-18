import { gql, useQuery } from '@apollo/client';

export const GET_ALL_USERS = gql`
  query {
    allUsers {
      Name
      Number
    }
  }
`;