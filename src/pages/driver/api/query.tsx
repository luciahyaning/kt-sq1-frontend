import {gql} from "@apollo/client";

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
