import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useMutation } from "react-query";
import { useAlert } from "react-alert";
import { queryClient } from "../../../../app/services";
import { registerUser } from "../../api/signUpApi";
import { UserPayload } from "../../interface/userPayload";
import { onChangeListener } from "../../../../utils/type";

export const Main: React.FC = () => {
  const alert = useAlert();
  const [userPayload, setUserPayload] = useState<UserPayload>();

  //mutation for creating new group
  const registerUserMutation = useMutation(
    (payload: UserPayload) => registerUser(payload),
    {
      onSuccess: (user) => {
        queryClient.invalidateQueries();
        alert.success("Successfully registering user");
      },
      onError: (error: any) => alert.success(error.response.data.message),
    }
  );

  //button click listener that trigger mutation
  const onRegisterButtonClick = (e) => {
    e.preventDefault();
    registerUserMutation.mutate(userPayload);
  };

  //listen name input change and set state
  const onChangeNameInputListener: onChangeListener = (e) => {
    setUserPayload({ ...userPayload, name: e.target.value });
  };

  //listen name email change and set state
  const onChangeEmailInputListener: onChangeListener = (e) => {
    setUserPayload({ ...userPayload, email: e.target.value });
  };

  //listen name password change and set state
  const onChangePasswordInputListener: onChangeListener = (e) => {
    setUserPayload({ ...userPayload, password: e.target.value });
  };

  return (
    <div className="text-center py-4" style={{ backgroundColor: "#282c34" }}>
      <Container>
        <h3 className="text-white">Register User</h3>
        <Form>
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" onChange={onChangeNameInputListener} />
          <Form.Label>Email address</Form.Label>
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
