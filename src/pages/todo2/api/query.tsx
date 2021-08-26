import {
  gql
} from "@apollo/client";

export const BUSSINESS = gql`
query {
  allBusinesses {
    id
    name
    tag
    description
  }
}
`;

export const INSERT_BUSSINESS = gql`
  mutation addBussiness($description: String!, $name: String!, $tag: String!) {
    createBussiness (
      description: $description,
          name: $name,
          tag: $tag
    ){
      id
      name
      tag
      description
    }
  }
`;