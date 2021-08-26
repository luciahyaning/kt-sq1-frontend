import React, { useState } from "react";
import { Row, Col, Container } from "reactstrap";
import { Bussiness } from "./Bussiness";
import { InputBussiness } from "./InputBussiness";
import { EditBussiness } from "./EditBussiness";

export const Main: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState({});
  const onSelectedItem = (item) => {
    // console.log(item);
    setSelectedItem(item)
  };
  return (
    <>
      <h1>Todo 2</h1>
      <Container>
        <Row>
          <Col>
            <InputBussiness /> 
          </Col>
          <Col>
            <EditBussiness selectedItem={selectedItem} />
          </Col>
        </Row>
        <br />
        <br />
        <Bussiness onSelectedItem={onSelectedItem} />
      </Container>
    </>
  );
};
