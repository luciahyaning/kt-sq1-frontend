import { Table, Button } from "reactstrap";
import { BUSSINESS } from "../../api/query";

import {
  useQuery,
} from "@apollo/client";

export const Bussiness = (
  {
    onSelectedItem
  }
) => {
  const { loading, error, data, refetch } = useQuery(BUSSINESS, {
    pollInterval: 2000
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <>
      <Button onClick={() => { refetch() }}>Refetch!</Button>
      <br />
      <br />
      <Table striped bordered responsive={true}>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Tag</th>
            <th>Description</th>
            <th>action</th>
          </tr>
        </thead>
        <tbody>
          {
            data.allBusinesses.map(({ id, name, tag, description }: any, key: number) => (
              <tr key={id}>
                <td>
                  {key + 1}
                </td>
                <td>{name}</td>
                <td>{tag}</td>
                <td>{description}</td>
                <td>
                  <Button
                    onClick={() => {
                      onSelectedItem({ id, name, tag, description });
                    }}
                  >Edit</Button>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
    </>
  )
}
