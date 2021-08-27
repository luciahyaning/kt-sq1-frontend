import React, { useState } from "react";
import {
  Row,
  Col,
  Container,
  Button,
  ModalHeader,
  ModalBody,
  Modal
} from "reactstrap";
import {EditDriver} from "./EditDriver";
import {DriverList} from "./DriverList";
import {InputDriver} from "./InputDriver";


export const Main: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState({});
  const [toggleInsert, setToggleInsert] = useState(false);
  const [toggleUpdate, setToggleUpdate] = useState(false);
  const onSelectedItem = (item) => {
    setSelectedItem(item);
    setToggleUpdate(!toggleUpdate);
  };
  return (
    <>
      <Container>
        <Button onClick={() => { setToggleInsert(!toggleInsert) }}>Add Driver</Button>
        <Modal
          isOpen={toggleInsert}
          toggle={() => {
            setToggleInsert(!toggleInsert)
          }}
        >
          <ModalHeader>Create Driver</ModalHeader>
          <ModalBody>
            <InputDriver onSubmit={() => { setToggleInsert(!toggleInsert) }} />
          </ModalBody>
        </Modal>
          {/* edit */}
          <Modal
          isOpen={toggleUpdate}
          toggle={() => {
            setToggleUpdate(!toggleUpdate)
          }}
        >
          <ModalHeader>Edit Driver</ModalHeader>
          <ModalBody>
            <EditDriver selectedItem={selectedItem} onSubmit={() => { setToggleUpdate(!toggleUpdate) }} />
          </ModalBody>
        </Modal>
        <br />
        <br />
        <DriverList onSelectedItem={onSelectedItem} />

      </Container>
    </>
  );
};
