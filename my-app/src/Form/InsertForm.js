import React from "react";
import { Container, Button, Form, FormGroup, Label, Input } from "reactstrap";
import { User } from "../Models/User";
import Services from "../Services/Services";
import { t } from 'ttag'
import AppSettingsModel, { Banner, AppSettings } from "../Models/AppSettingsModel"
//import LocalizedStrings from "react-localization";

export default class InsertForm extends React.Component {
  state = {
    base_url:"",pages_path:"",layout_path:"",laucher_path:"",events_path:"",
    epg:"",vod:"",linearAdv:"",videoAdv:"",
    broadcastVideoElement:"",carouselId:"",streamEventObject:"",
    lancher:"",events:"",
    linearAdvEnabled:false,videoAdvEnabled:false,preroll:false,midroll:false,postroll:false,linearAdvApplication:"",
    cornerBannerCampaignId:"",cornerBannerStreamEvent:"",
    lsShapeBannerCampaignId:"",lsShapeBannerStreamEvent:"",
    stripeBannerCampaignId:"",stripeBannerStreamEvent:""
  };

  // strings = new LocalizedStrings({
  //   en: {
  //     name: "Name",
  //     lastname: "Lastname",
  //     age: "Age",
  //     button: "Submit"
  //   },
  //   it: {
  //     name: "Nome",
  //     lastname: "Cognome",
  //     age: "Età",
  //     button: "Invia"
  //   }
  // });

  service = new Services();

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });

// this.setState( prevState => {  return {} } )

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
          <FormGroup name="AppSettings"> 
            <Label for="base_url">{t`base_url`}</Label>
            <Input
              required
              onChange={this.onChange}
              value={this.state.base_url}
              type="text"
              name="base_url"
              id="base_url"
              placeholder="Insert base url"
            />
            <Label for="pages_path">{t`Pages Path`}</Label>
            <Input
              required
              onChange={this.onChange}
              value={this.state.pages_path}
              type="text"
              name="pages_path"
              id="pages_path"
              placeholder="Insert Pages Path"
            />
            <Label for="layout_path">{t`Layout Path`}</Label>
            <Input
              required
              onChange={this.onChange}
              value={this.state.layout_path}
              type="text"
              name="layout_path"
              id="layout_path"
              placeholder="Insert Layout Path"
            />
            <Label for="laucher_path">{t`Laucher Path`}</Label>
            <Input
              required
              onChange={this.onChange}
              value={this.state.laucher_path}
              type="text"
              name="pages_path"
              id="pages_path"
              placeholder="Insert Laucher Path"
            />
            <Label for="events">{t`Events Path`}</Label>
            <Input
              required
              onChange={this.onChange}
              value={this.state.events_path}
              type="text"
              name="events_path"
              id="events_path"
              placeholder="Insert Events Path"
            />
            <FormGroup name = "platform">
            <Label for="epg">{t`epg`}</Label>
            <Input
              required
              onChange={this.onChange}
              value={this.state.epg}
              type="text"
              name="epg"
              id="epg"
              placeholder="Insert epg"
            />
            <Label for="vod">{t`Vod`}</Label>
            <Input
              required
              onChange={this.onChange}
              value={this.state.vod}
              type="text"
              name="vod"
              id="vod"
              placeholder="Insert Vod"
            />
            <Label for="linearAdv">{t`linearAdv`}</Label>
            <Input
              required
              onChange={this.onChange}
              value={this.state.linearAdv}
              type="text"
              name="linearAdv"
              id="linearAdv"
              placeholder="Insert LinearAdv"
            />
            <Label for="videoAdv">{t`VideoAdv`}</Label>
            <Input
              required
              onChange={this.onChange}
              value={this.state.videoAdv}
              type="text"
              name="videoAdv"
              id="videoAdv"
              placeholder="Insert VideoAdv"
            />

            </FormGroup>
           </FormGroup>
          <Button>{t`Submit`}</Button>
        </Form>
      </Container>
    );
  }
}
