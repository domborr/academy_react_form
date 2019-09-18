import React from "react";
import { Container, Button, Form, FormGroup, Label, Input } from "reactstrap";
import { User } from "../Models/User";
import Services from "../Services/Services";
import LocalizedStrings from "react-localization";

export default class UserForm extends React.Component {
  state = {
    name: "",
    lastname: "",
    age: ""
  };

  strings = new LocalizedStrings({
    en: {
      name: "Name",
      lastname: "Lastname",
      age: "Age",
      button: "Submit"
    },
    it: {
      name: "Nome",
      lastname: "Cognome",
      age: "Età",
      button: "Invia"
    }
  });

  service = new Services();

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  onSubmit = event => {
    event.preventDefault();
    let user = new User(this.state.name, this.state.lastname, this.state.age);
    console.log(user);
    this.service.exportToJson(JSON.stringify(user));
  };

  render() {
    return (
      <Container>
        <Form onSubmit={this.onSubmit}>
          <FormGroup>
            <Label for="name">{this.strings.name}</Label>
            <Input
              required
              onChange={this.onChange}
              value={this.state.name}
              type="text"
              name="name"
              id="name"
              placeholder="John"
            />
            <Label for="lastname">{this.strings.lastname}</Label>
            <Input
              required
              onChange={this.onChange}
              value={this.state.lastname}
              type="text"
              name="lastname"
              id="lastname"
              placeholder="Smith"
            />
          </FormGroup>
          <FormGroup>
            <Label for="age">{this.strings.age}</Label>
            <Input
              required
              onChange={this.onChange}
              value={this.state.age}
              type="number"
              name="age"
              id="age"
              placeholder="18"
              min="1"
            />
          </FormGroup>
          <Button>{this.strings.button}</Button>
        </Form>
      </Container>
    );
  }
}
