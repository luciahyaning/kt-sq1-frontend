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
mutation updateDriver( $name: String!, $phoneNumber: String!) {
    updateDriver( id: "1", input: {name: $name, phoneNumber: $phoneNumber}) {
        id,
        idCard,
        status,
        name,
        phoneNumber
      }
  }
`;

export const updateTruck = ({id, driverName, phoneNumber}: any) => {
    return (
        gql`
  mutation {
    updateDriver( id: ${String(''+id+'')}, input: {name: ${String('"'+driverName+'"')}, phoneNumber:${String('"'+phoneNumber+'"')}}) {
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

export const insertDriver = ({driverName, phoneNumber}) => {
    return gql` mutation {
    createDriver(input: {name: ${String('"'+driverName+'"')}, phoneNumber:${String('"'+phoneNumber+'"')}}) {
        id,
        name,
        phoneNumber,
        license,
        idCard,
        status
    }
}`;
}
