import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useMutation } from "react-query";
import { useAlert } from "react-alert";
import { onChangeListener } from "../../../../utils/type";
import { LoginPayload } from "../../interface/loginPayload";
import { sigIn } from "../../api/loginApi";

export const Main: React.FC = () => {
  const alert = useAlert();
  const [loginPayload, setLoginPayload] = useState<LoginPayload>();

  //mutation for creating new group
  const registerUserMutation = useMutation(
    (payload: LoginPayload) => sigIn(payload),
    {
      onSuccess: (token) => {
        localStorage.setItem("token", token.access_token);
        alert.success("Successfully Login");
        window.location.href = "/";
      },
      onError: (error: any) => alert.success(error.response.data.message),
    }
  );

  //button click listener that trigger mutation
  const onRegisterButtonClick = (e) => {
    e.preventDefault();
    registerUserMutation.mutate(loginPayload);
  };

  //listen name email change and set state
  const onChangeEmailInputListener: onChangeListener = (e) => {
    setLoginPayload({ ...loginPayload, username: e.target.value });
  };

  //listen name password change and set state
  const onChangePasswordInputListener: onChangeListener = (e) => {
    setLoginPayload({ ...loginPayload, password: e.target.value });
  };

  return (
    <div className="text-center py-4" style={{ backgroundColor: "#282c34" }}>
      <Container>
        <h3 className="text-white">Login</h3>
        <Form>
          <Form.Label>Username</Form.Label>
          <Form.Control type="email" onChange={onChangeEmailInputListener} />
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            onChange={onChangePasswordInputListener}
          />
          <Button
            variant="primary"
            type="submit"
            onClick={onRegisterButtonClick}
          >
            Submit
          </Button>
        </Form>
      </Container>
    </div>
  );
};
