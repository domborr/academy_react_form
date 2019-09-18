import React from "react";
import { Container, Button, Form, FormGroup, Label, Input } from "reactstrap";
import { User } from "../Models/User";
import FormValidation from "./FormValidation";
import Services from "../Services/Services";

export default class UserForm extends React.Component {
  state = {
    name: "",
    lastname: "",
    age: "",
    isValid: false
  };

  formValidation = new FormValidation();
  service = new Services();

   checkFormFields(){
      return (this.state.name!=="" &&
      this.state.lastname!=="" &&
      this.state.age!=="") ? true : false;
     
  }

 
  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
    if (
      this.formValidation.validateString(event.target.value) &&
      this.checkFormFields
    ) {
      this.state.isValid = true;
    } else {
      this.state.isValid = false;
    }
    console.log(this.checkFormFields());
    console.log(this.state.isValid);
  };

  onSubmit = event => {
    event.preventDefault();
    let user = new User(this.state.name, this.state.lastname, this.state.age);
    console.log(user);
    this.service.exportToJson(JSON.stringify(user, null, 2));    
  };

  render() {
    return (
      <Container>
        <Form onSubmit={this.onSubmit}>
          <FormGroup>
            <Label for="name">Name</Label>
            <Input
              onChange={this.onChange}
              value={this.state.name}
              type="text"
              name="name"
              id="name"
              placeholder="Name"
            />
            <Label for="lastname">Lastname</Label>
            <Input
              onChange={this.onChange}
              value={this.state.lastname}
              type="text"
              name="lastname"
              id="lastname"
              placeholder="Lastname"
            />
          </FormGroup>
          <FormGroup>
            <Label for="age">Age</Label>
            <Input
              onChange={this.onChange}
              value={this.state.age}
              type="number"
              name="age"
              id="age"
              placeholder="18"
              min="1"
            />
          </FormGroup>
          <Button>Submit</Button>
        </Form>
      </Container>
    );
  }
}
