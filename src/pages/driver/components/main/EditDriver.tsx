import { useState, useEffect } from "react";
import { Input, Button, Alert } from "reactstrap";
import { useAlert } from "react-alert";
import { UPDATE_DRIVERS, updateTruck } from "../../api/query";
import {
  useMutation,
} from "@apollo/client";

export const EditDriver = (
  {
    onSubmit,
    selectedItem
  }
) => {
  const alert = useAlert();
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [id, setId] = useState("");

  const [payload, setPayload] = useState({
    id: 1, driverName: null, phoneNumber: null
});

  const [editDriver, { data, loading, error }] = useMutation(updateTruck(payload), {
    errorPolicy: 'all'
  });

  useEffect(() => {
    if (selectedItem) {
      setPayload({
        driverName: selectedItem.name,
        phoneNumber: selectedItem.phoneNumber,
        id: selectedItem.id,
      })
    }
  }, [selectedItem]);

  useEffect(() => {
    if (data && data.updateDriver) {
      onSubmit()
      alert.success("Edit Success");
      setName("");
      setPhoneNumber("");
      setPhoneNumber("");
    }
  }, [data]);

  return (
    <div>
      {
        loading &&
        'Submitting...'
      }
      {
        error &&
        (
          <Alert color={"danger"}>
            {error.message}
          </Alert>
        )
      }
      <form
        onSubmit={e => {
          e.preventDefault();
          console.log(phoneNumber);
          console.log(name);
          console.log(id);
          editDriver({
            variables: {
              input: payload
          }
          })
            .catch(e => {
              console.log(e);
              console.log(e.message);
            });
        }}
      >
        <label>Name</label>
        <Input
          value={payload.driverName}
          name="licenseNumber"
          onChange={(e) => setPayload({...payload, driverName: e.target.value})}
        />
        <br />
        <label>Phone Number</label>
        <Input
          value={payload.phoneNumber}
          name="plateType"
          onChange={(e) => setPayload({...payload, phoneNumber: e.target.value})}
        />
        <br />
        <Button type="submit">Save</Button>
      </form>
    </div>
  );
}
