import { gql } from "@apollo/client";

export const GET_USERS = gql`
    query getUsers {
        users {
            name
            email
        }
    }
`;

export const GET_ME = gql`
    query Query {
        me {
            email
        }
    }
`;