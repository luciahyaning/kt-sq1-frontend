import {useEffect, useState} from "react";
import {Alert, Button, FormGroup, FormText, Input, Label} from "reactstrap";
import {useAlert} from "react-alert";
import {useMutation,} from "@apollo/client";
import {insertDriver} from "../../api/query";

export const InputDriver = (
    {
        onSubmit
    }
) => {
    const alert = useAlert();

    const [payload, setPayload] = useState({
        driverName: null, phoneNumber: null
    });
    const [addTruck, {data, loading, error}] = useMutation(insertDriver(payload), {
        errorPolicy: 'all'
    });


    console.log(data)

    useEffect(() => {
        // if (data && data.createBussiness) {
        //     alert.success("Input Success");
        //     setLicenseNumber("");
        //     setTruckType("");
        //     setPlateType("");
        //     onSubmit();
        // }
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
                    onSubmit()
                    addTruck({
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
                <label>Driver Name</label>
                <Input
                    value={payload.driverName}
                    name="licenseNumber"
                    onChange={(e) => setPayload({...payload, driverName: e.target.value})}
                />
                <br/>
                <label>Phone Number</label>
                <Input
                    value={payload.phoneNumber}
                    name="plateType"
                    onChange={(e) => setPayload({...payload, phoneNumber: e.target.value})}
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
