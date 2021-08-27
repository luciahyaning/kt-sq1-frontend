import { Table, Button } from "reactstrap";
import { TRUCKS } from "../../api/query";

import {
  useQuery,
} from "@apollo/client";

export const TrucksList = (
  {
    onSelectedItem
  }
) => {
  const { loading, error, data, refetch } = useQuery(TRUCKS, {
    pollInterval: 2000
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <>
      <Table striped bordered responsive={true}>
        <thead>
          <tr>
            <th>#</th>
            <th>License Number</th>
            <th>Truck Type</th>
            <th>Plate Type</th>
            <th>Production Year</th>
            <th>action</th>
          </tr>
        </thead>
        <tbody>
          {
            data.allBusinesses.length == 0 &&
            (<td colSpan={6} className="text-center" >Empty Data</td>)
          }
          {
            data.allBusinesses.map(({ id, name, tag, description }: any, key: number) => (
              <tr key={id}>
                <td>
                  {key + 1}
                </td>
                <td>{name}</td>
                <td>{tag}</td>
                <td>{description}</td>
                <td>Production Year</td>
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
