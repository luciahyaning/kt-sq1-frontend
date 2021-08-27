import {useEffect, useState} from "react";
import {Alert, Button, FormGroup, FormText, Input, Label} from "reactstrap";
import {useAlert} from "react-alert";
import {UPDATE_DRIVERS} from "../../api/query";
import {useMutation,} from "@apollo/client";

export const InputDriver = (
    {
        onSubmit
    }
) => {
    const alert = useAlert();

    const [licenseNumber, setLicenseNumber] = useState("");
    const [payload, setPayload] = useState({
        driverName: null, phoneNumber: null
    });
    const [addTruck, {data, loading, error}] = useMutation(UPDATE_DRIVERS, {
        errorPolicy: 'all'
    });


    useEffect(() => {
        if (data && data.createBussiness) {
            alert.success("Input Success");
            setLicenseNumber("");
            // setTruckType("");
            // setPlateType("");
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
            {/* <form
                onSubmit={e => {
                    e.preventDefault();
                    addTruck({
                        variables: {
                            name: licenseNumber,
                            description: plateType,
                            tag: truckType
                        }
                    })
                        .catch(e => {
                            console.log(e);
                            console.log(e.message);
                        });
                }}
            >
                <label>Driver Name</label>
                <Input
                    value={licenseNumber}
                    name="licenseNumber"
                    onChange={(e) => setLicenseNumber(e.target.value)}
                />
                <br/>
                <label>Phone Number</label>
                <Input
                    value={plateType}
                    name="plateType"
                    onChange={(e) => setPlateType(e.target.value)}
                />
                <br/>
                <label>ID Card</label>
                <FormGroup>
                    <Label for="exampleFile">File</Label>
                    <Input type="file" name="file" id="exampleFile"/>
                    <FormText color="muted">
                        Please Upload ID Card
                    </FormText>
                </FormGroup>

                <label>Driver License</label>
                <FormGroup>
                    <Label for="exampleFile">File</Label>
                    <Input type="file" name="file" id="exampleFile"/>
                    <FormText color="muted">
                        Please Upload Driver License
                    </FormText>
                </FormGroup>

                <br/>

                <br/>
                <Button type="submit">Save Driver</Button>
            </form> */}
        </div>
    );
}
