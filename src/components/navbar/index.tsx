import {Button, Container, Navbar} from "react-bootstrap";
import React from "react";
import ProtectedRoute, {PrivateRoute} from "../../utils/protectedRoute";
import SignUp from "../../pages/signup";
import Login from "../../pages/login";
import TransporterTrucks from "../../pages/transporterTrucks";
import {useHistory} from "react-router";


export const NavigationBar: React.FC = () => {
    const history=useHistory()
    return (

        // <Switch>
        //     <PrivateRoute exact path="/register">
        //         <SignUp />
        //     </PrivateRoute>
        //     <PrivateRoute exact path="/login">
        //         <Login />
        //     </PrivateRoute>
        //     <ProtectedRoute exact path="/">
        //         HOME
        //     </ProtectedRoute>
        //     <ProtectedRoute exact path="/transporter/trucks">
        //         <TransporterTrucks />
        //     </ProtectedRoute>
        //     <Redirect to="/" />
        // </Switch>

        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">LMS |</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <div className="row">
                        <div className="col"><Button className="btn bg-transparent text-black-50 btn btn-outline-light" onClick={() => {

                        }}>Shipments</Button></div>
                        <div className="col"><Button className="btn bg-transparent  text-black-50 btn btn-outline-light" onClick={() => {
                            history.push('/transporter/trucks')
                        }}>Trucks</Button></div>
                        <div className="col"><Button className="btn bg-transparent text-black-50 btn btn-outline-light" onClick={() => {history.push('/transporter/drivers')
                        }}>Drivers</Button></div>

                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
};

