import React from "react";
import { FormGroup, Label, Input, Button, Form } from "reactstrap";
import App from "./to-do";
import SignUp from "./signup";
function LogIn() {
  return (
    <>
      <Form inline>
        <FormGroup floating>
          <Input
            id="exampleEmail"
            name="email"
            placeholder="Email"
            type="email"
          />
          <Label for="exampleEmail">Email</Label>
        </FormGroup>{" "}
        <FormGroup floating>
          <Input
            id="examplePassword"
            name="password"
            placeholder="Password"
            type="password"
          />
          <Label for="examplePassword">Password</Label>
        </FormGroup>{" "}
        <Button onClick={<App />}>Submit</Button>
        {"  "}
        <Button onClick={<SignUp />}>Sign In</Button>
      </Form>
    </>
  );
}
export default LogIn;
