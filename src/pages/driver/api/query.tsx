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
`;
)
}
