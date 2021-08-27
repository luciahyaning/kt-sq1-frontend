import {
  gql
} from "@apollo/client";

export const TRUCKS = gql`
query {
  allBusinesses {
    id
    name
    tag
    description
  }
}
`;

export const INSERT_TRUCKS = gql`
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