import { gql } from "@apollo/client";

export const DRIVERS = gql`
query {
    drivers {
    id,
    id_card,
    license,
    name,
    phoneNumber
    status
}}
`;

export const UPDATE_DRIVERS = gql`
mutation updateDriver( $id: String!, $name: String!, $phoneNumber: String!) {
    updateDriver( id: "1", input: {name: $name, phoneNumber: $phoneNumber}) {
        id,
        idCard,
        status,
        name,
        phoneNumber
      }
  }
`;

export const updateTruck = (id: string, name: string, phoneNumber: string) => {
    return (
        gql`
  mutation {
    updateDriver( id:  ${id}, input: {name: ${name}, phoneNumber:${phoneNumber}}) {
        id,
        idCard,
        status,
        name,
        phoneNumber
      }
}
`
    );
}


export const insertTruck = (name: string, phoneNumber: string) => {

    return (
        gql`
  mutation {
    createDriver(input: {name: ${name}, phoneNumber:${phoneNumber}) {
        id,
        name,
        phoneNumber,
        license,
        idCard,
        status
    }
}
`
    );
}
