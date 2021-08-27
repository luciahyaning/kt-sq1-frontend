import {
  gql
} from "@apollo/client";

// export const LOGIN = gql`
// query loginUser($email: String!, $password: String!) {
//   loginUser(email: $email, password: $password) {
//     token,
//     user 
//   }
// }
// `;

export const LOGIN = gql`
mutation loginUser($email: String!, $password: String!) {
  loginUser(input: {email: $email, password: $password}) {
    token,
    user {
        id,
        email
    }
  }
}
`;