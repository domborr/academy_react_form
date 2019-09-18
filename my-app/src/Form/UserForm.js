import React from 'react';
import { Button, Form, FormGroup, Label, Input, Container } from 'reactstrap';

export default class UserForm extends React.Component{

    state = {
        name:'pippo',
        lastname:'cane',
        age :'',
        isValid : false
    }

    onChange = event =>{ 
      this.setState({ [event.target.name]:event.target.value })
     }

    render() {
        return (
      <Container>
        <Form>
          <FormGroup>
            <Label for= "name">Name</Label>
            <Input onChange = {this.onChange} value = {this.state.name} type="text" name="name" id="name" placeholder="enter your name" />
            <Label for="lastname">Lastname</Label>
            <Input onChange = {this.onChange} value = {this.state.lastname} type="text" name="lastname" id="lastname" placeholder="enter your lastname" />
          </FormGroup>
          <FormGroup>
            <Label for="age">Age</Label>
            <Input onChange = {this.onChange} value = {this.state.age} type="number" name="age" id="age" placeholder=" 18..."/>
          </FormGroup>
          <Button>Submit</Button>
        </Form>
      </Container>
        )
        }    
}