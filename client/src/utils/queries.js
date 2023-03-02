import { gql } from "@apollo/client";

export const GET_USERS = gql`
    query getUsers {
        users {
            name
            email
        }
    }
`;

export const GET_MY_PLANTS = gql`
    query myPlants {
        myPlants {
            birthdate
        }
    }

`

export const GET_ME = gql`
    query getMe {
        me {
            name
            email
            plants {
                birthDate
                nickname
                icon
            }
        }
    }
`;