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
import { TrucksList } from "./TrucksList";
import { InputTrucks } from "./InputTrucks";
import { EditTrucks } from "./EditTrucks";

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
        <Button onClick={() => { setToggleInsert(!toggleInsert) }}>Add Truck</Button>
        <Modal
          isOpen={toggleInsert}
          toggle={() => {
            setToggleInsert(!toggleInsert)
          }}
        >
          <ModalHeader>Create Truck</ModalHeader>
          <ModalBody>
            <InputTrucks onSubmit={() => { setToggleInsert(!toggleInsert) }} />
          </ModalBody>
        </Modal>
          {/* edit */}
          <Modal
          isOpen={toggleUpdate}
          toggle={() => {
            setToggleUpdate(!toggleUpdate)
          }}
        >
          <ModalHeader>Edit Truck</ModalHeader>
          <ModalBody>
            <EditTrucks selectedItem={selectedItem} onSubmit={() => { setToggleUpdate(!toggleUpdate) }} />
          </ModalBody>
        </Modal>
        <br />
        <br />
        <TrucksList onSelectedItem={onSelectedItem} />

      </Container>
    </>
  );
};
