import { useState, useEffect } from "react";
import { Input, Button, Alert } from "reactstrap";
import { useAlert } from "react-alert";
import { INSERT_TRUCKS } from "../../api/query";
import {
  useMutation,
} from "@apollo/client";

export const EditTrucks = (
  {
    onSubmit,
    selectedItem
  }
) => {
  const alert = useAlert();

  const [licenseNumber, setLicenseNumber] = useState("");
  const [truckType, setTruckType] = useState("");
  const [plateType, setPlateType] = useState("");
  const [productionYear, setProductionYear] = useState(0);
  const [editTruck, { data, loading, error }] = useMutation(INSERT_TRUCKS, {
    errorPolicy: 'all'
  });

  useEffect(() => {
    if (selectedItem) {
      setLicenseNumber(selectedItem.name);
      setTruckType(selectedItem.tag);
      setPlateType(selectedItem.description);
    }
  }, [selectedItem]);

  useEffect(() => {
    if (data && data.createBussiness) {
      alert.success("Edit Success");
      setLicenseNumber("");
      setTruckType("");
      setPlateType("");
      onSubmit();
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
          editTruck({
            variables: {
              name: licenseNumber,
              description: truckType,
              tag: plateType
            }
          })
            .catch(e => {
              console.log(e);
              console.log(e.message);
            });
        }}
      >
        <label>License Number</label>
        <Input
          value={licenseNumber}
          name="licenseNumber"
          onChange={(e) => setLicenseNumber(e.target.value)}
        />
        <br />
        <label>Truck Type</label>
        <Input
          value={truckType}
          name="description"
          onChange={(e) => setTruckType(e.target.value)}
        />
        <br />
        <label>Plate Type</label>
        <Input
          type="select"
          value={plateType}
          name="plateType"
          onChange={(e) => setPlateType(e.target.value)}
        >
          <option key="0" value="">
            - Choose Plate Type -
          </option>
          <option key={1} value="yellow">
            Yellow
          </option>
          <option key={2} value="black">
            Black
          </option>
        </Input>
        <br />
        <label>Production Year</label>
        <Input
          value={productionYear}
          type="number"
          name="productionYear"
          onChange={(e) => setProductionYear(parseInt(e.target.value))}
        />
        <br />
        <Button type="submit">Save</Button>
      </form>
    </div>
  );
}
