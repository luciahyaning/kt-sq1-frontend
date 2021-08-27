import React, { useState } from "react";
import { Button, Container, Form, InputGroup } from "react-bootstrap";
// import { useMutation } from "react-query";
import { useAlert } from "react-alert";
import { LOGIN } from "../../api/query";
import { Redirect } from "react-router";

import { useMutation } from "@apollo/client";
import { LoginPayload } from "../../../login/interface/loginPayload";

export const Main: React.FC = () => {
  const [login, { data, loading, error }] = useMutation(LOGIN, {
    errorPolicy: "all",
  });
  const alert = useAlert();
  const [loginPayload, setLoginPayload] = useState<LoginPayload>();
  const [checked, setChecked] = useState({
    shipper: false,
    transporter: false,
  });
  const [role, setRole] = useState<number>(0);

  // if (data && data.loginUser) {
  //   localStorage.setItem("token", data.loginUser.token);
  //   alert.success("Successfully Login");
  //   window.location.href = "/";
  // }

  const doLogin = () => {
    alert.success("Successfully Login");
    if (role)
      localStorage.setItem("role", role.toString());

    if (role == 1) {
      window.location.href = "http://localhost:3000/transporter/trucks";
      // return <Redirect to={{ pathname: "/transporter/trucks" }} />;
    }
    else if (role == 2) {
      // return <Redirect to={{ pathname: "login" }} />;
      window.location.href = "http://localhost:3000/transporter/trucks";
    }
  }

  return (
    <>
      {error && error.message}
      <div>
        <Container
          style={{ marginTop: "250px", height: "500px" }}
          className="w-50 p-3"
        >
          <div className="card">
            <article className="card-body">
              <h4 className="card-title mb-4 mt-1">Sign in</h4>
              <form>
                <InputGroup className="mb-3">
                  <InputGroup.Radio
                    aria-label="Checkbox for following text input"
                    checked={checked.transporter}
                    onClick={() => {
                      setRole(1);
                      setChecked({
                        shipper: false,
                        transporter: true,
                      });
                    }}
                  />
                  <Form.Control
                    type="text"
                    disabled={true}
                    value="Transporter"
                  />
                </InputGroup>

                <InputGroup>
                  <InputGroup.Radio
                    checked={checked.shipper}
                    onClick={() => {
                      setRole(2);
                      setChecked({
                        shipper: true,
                        transporter: false,
                      });
                    }}
                    aria-label="Radio button for following text input"
                  />
                  <Form.Control type="text" disabled={true} value="Shipper" />
                </InputGroup>
                {/* form-group// */}

                <InputGroup>
                  <Button
                    type="submit"
                    className="btn btn-primary btn-block mt-4"
                    onClick={() => {
                      doLogin();
                      // login({
                      //   variables: {
                      //     role: role,
                      //   },
                      // });
                    }}
                  >
                    {" "}
                    Login
                  </Button>
                </InputGroup>
                {/* form-group// */}
              </form>
            </article>
          </div>
        </Container>
      </div>
    </>
  );
};
