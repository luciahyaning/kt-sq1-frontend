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
  const [editDriver, { data, loading, error }] = useMutation(UPDATE_DRIVERS, {
    errorPolicy: 'all'
  });

  useEffect(() => {
    if (selectedItem) {
      setName(selectedItem.name);
      setPhoneNumber(selectedItem.phoneNumber);
      setId(selectedItem.id);
    }
  }, [selectedItem]);

  useEffect(() => {
    if (data && data.updateDriver) {
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
              id: id,
              name: name,
              phoneNumber: phoneNumber,
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
          value={name}
          name="licenseNumber"
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <label>Phone Number</label>
        <Input
          value={phoneNumber}
          name="plateType"
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <br />
        <Button type="submit">Save</Button>
      </form>
    </div>
  );
}
