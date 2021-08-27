import { Table, Button, Input, Row, Col } from "reactstrap";
import { TRUCKS } from "../../api/query";
import { useState, useEffect } from "react";
import DataTable from 'react-data-table-component'

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
  const [selectedField, setSelectedField] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const dataTable = [{ id: 1, title: 'Conan the Barbarian', year: '1982' }];
  const columns = [
    {
      name: 'Title',
      selector: 'title',
      sortable: true,
    },
    {
      name: 'Year',
      selector: 'year',
      sortable: true,
      right: true,
    },
  ];

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <>
      <Row>
        <Col lg="3">
          <Input
            type="select"
            value={selectedField}
            name="plateType"
            onChange={(e) => setSelectedField(e.target.value)}
          >
            <option key="0" value="">
              - Truck Type -
            </option>
            <option key={1} value="licenseNumber">
              Tronton
            </option>
            <option key={2} value="truckType">
              Tronton 2
            </option>
          </Input>
        </Col>
        <Col lg="6" >
        </Col>
        <Col lg="3">
          <Input
            value={searchQuery}
            name="searchQuery"
            placeholder="Search"
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </Col>
      </Row>
      <br />
      {/* <DataTable
        title="Arnold Movies"
        columns={columns}
        data={dataTable}
        
      /> */}
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
            (<td colSpan={6} className="text-center" >No Data Found</td>)
          }
          {
            data.allBusinesses.map(({ id, name, tag, description }: any, key: number) => (
              <tr key={id}>
                <td>
                  {key + 1}
                </td>
                <td>{name}</td>
                <td>{description}</td>
                <td>{tag}</td>
                <td>Production Year</td>
                <td>
                  <Button
                    onClick={() => {
                      onSelectedItem({ id, name, tag, description });
                    }}
                  >Update Truck</Button>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
    </>
  )
}
