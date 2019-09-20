import React from "react";
import { CustomInput, Container, Button, Form, FormGroup, Label, Input, Row, Col } from "reactstrap";
import { User } from "../Models/User";
import Services from "../Services/Services";
import { t } from 'ttag'
import AppSettingsModel, { Banner, AppSettings } from "../Models/AppSettingsModel"
import FormGenerator from "./FormGenerator";
import FormGeneratorCustom from "./FormGenerator";
//import LocalizedStrings from "react-localization";

export default class InsertForm extends React.Component {
  state = {
    base_url: "", pages_path: "", layout_path: "", events_path: "", laucher_path: "", events_path: "",
    epg: "", vod: "", linearAdv: "", videoADV: "",
    broadcastVideoElement: "", carouselID: "", streamEventObject: "",
    linearAdvEnabled: false, videoAdvEnabled: false, preroll: false, midroll: false, postroll: false, linearAdvApplication: "",
    cornerBannerCampaignId: "", cornerBannerStreamEvent: "",
    lsShapeBannerCampaignId: "", lsShapeBannerStreamEvent: "",
    stripeBannerCampaignId: "", stripeBannerStreamEvent: ""
  };

  service = new Services();

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });

    // this.setState( prevState => {  return {} } )

  };

  onCheckboxChange = event => {
    this.setState({
      [event.target.name]: event.target.checked
    });
  }

  onSubmit = event => {
    event.preventDefault();
    let appsettingsmodel = this.state;
    console.log(appsettingsmodel);
    this.service.exportToJson(JSON.stringify(appsettingsmodel));
  };

  render() {
    return (
      FormGeneratorCustom()
    )
}
}