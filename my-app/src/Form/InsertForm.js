import React from "react";
import { CustomInput, Container, Button, Form, FormGroup, Label, Input } from "reactstrap";
import { User } from "../Models/User";
import Services from "../Services/Services";
import { t } from 'ttag'
import AppSettingsModel, { Banner, AppSettings } from "../Models/AppSettingsModel"
//import LocalizedStrings from "react-localization";

export default class InsertForm extends React.Component {
  state = {
    base_url:"",pages_path:"",layout_path:"",events_path:"",laucher_path:"", events_path:"",
    epg:"",vod:"",linearAdv:"",videoADV:"",
    broadcastVideoElement:"",carouselID:"",streamEventObject:"",
    linearAdvEnabled:false,videoAdvEnabled:false,preroll:false,midroll:false,postroll:false,linearAdvApplication:"",
    cornerBannerCampaignId:"",cornerBannerStreamEvent:"",
    lsShapeBannerCampaignId:"",lsShapeBannerStreamEvent:"",
    stripeBannerCampaignId:"",stripeBannerStreamEvent:""
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
      <Container>
        <Form onSubmit={this.onSubmit}>
          <FormGroup>
            <Label for="base_url">base_url</Label>
            <Input required onChange={this.onChange} value={this.state.base_url} type="text"
                name="base_url" id="base_url" placeholder="base_url" />

            <Label for="pages_path">pages_path</Label>
            <Input required onChange={this.onChange} value={this.state.pages_path} type="text"
                name="pages_path" id="pages_path" placeholder="pages_path" />

            <Label for="layout_path">layout_path</Label>
            <Input required onChange={this.onChange} value={this.state.layout_path} type="text"
                name="layout_path" id="layout_path" placeholder="layout_path" />

            <Label for="nalaucher_pathme">laucher_path</Label>
            <Input required onChange={this.onChange} value={this.state.laucher_path} type="text"
                name="laucher_path" id="laucher_path" placeholder="laucher_path" />

            <Label for="events_path">events_path</Label>
            <Input required onChange={this.onChange} value={this.state.events_path} type="text"
                name="events_path" id="events_path" placeholder="events_path" />
          </FormGroup> 

          <FormGroup>
            <FormGroup name="platform">
              <Label for="epg">epg</Label>
              <Input required onChange={this.onChange} value={this.state.epg} type="text"
                  name="epg" id="epg" placeholder="epg" />

              <Label for="vod">vod</Label>
              <Input required onChange={this.onChange} value={this.state.vod} type="text"
                  name="vod" id="vod" placeholder="vod" />

              <Label for="linearAdv">linearADV</Label>
              <Input required onChange={this.onChange} value={this.state.linearAdv} type="text"
                  name="linearAdv" id="linearAdv" placeholder="linearAdv" />

              <Label for="videoADV">videoADV</Label>
              <Input required onChange={this.onChange} value={this.state.videoADV} type="text"
                  name="videoADV" id="videoADV" placeholder="videoADV" />
            </FormGroup>

            <FormGroup name="hbbtv_configuration">
              <Label for="broadcastVideoElement">broadcastVideoElement</Label>
              <Input required onChange={this.onChange} value={this.state.broadcastVideoElement} type="text"
                  name="broadcastVideoElement" id="broadcastVideoElement" placeholder="broadcastVideoElement" />

              <Label for="carouselID">carouselID</Label>
              <Input required onChange={this.onChange} value={this.state.carouselID} type="number"
                  name="carouselID" id="carouselID" placeholder="carouselID" />

              <Label for="streamEventObject">streamEventObject</Label>
              <Input required onChange={this.onChange} value={this.state.streamEventObject} type="text"
                  name="streamEventObject" id="streamEventObject" placeholder="streamEventObject" />
            </FormGroup>

            <FormGroup name="defaults">
              <Label for="lancher">lancher</Label>
              <Input required onChange={this.onChange} value={this.state.lancher} type="text"
                  name="lancher" id="lancher" placeholder="lancher" />

              <Label for="events">events</Label>
              <Input required onChange={this.onChange} value={this.state.events} type="text"
                  name="events" id="events" placeholder="events" />
            </FormGroup>

            <FormGroup name="advertising_configuration">

              <FormGroup>
                <Label for="linearAdvEnabled" check>
                {/* <CustomInput type="switch" id="linearAdvEnabled" name="linearAdvEnabled" 
                label="Turn on this custom switch" onChange={this.onChange}/> */}
                <Input type="checkbox" required onChange={this.onCheckboxChange} name="linearAdvEnabled" 
                  checked={this.state.linearAdvEnabled} id="linearAdvEnabled"/>{' '}
                linearAdvEnabled
                </Label>
              </FormGroup>
              
              <FormGroup>
                <Label for="videoAdvEnabled" check>
                <Input type="checkbox" required onChange={this.onCheckboxChange} name="videoAdvEnabled"
                  checked={this.state.videoAdvEnabled} id="videoAdvEnabled"/>{' '}
                videoAdvEnabled
                </Label>
              </FormGroup>
              
              <FormGroup>
                <Label for="preroll" check>
                <Input type="checkbox" required onChange={this.onCheckboxChange} name="preroll"
                  checked={this.state.preroll} id="preroll"/>{' '}
                preroll
                </Label>
              </FormGroup>
              
              <FormGroup>
                <Label for="midroll" check>
                <Input type="checkbox" required onChange={this.onCheckboxChange} name="midroll"
                  checked={this.state.midroll} id="midroll"/>{' '}
                midroll
                </Label>
              </FormGroup>

              <FormGroup>
                <Label for="postroll" check>
                <Input type="checkbox" required onChange={this.onCheckboxChange} name="postroll"
                  checked={this.state.postroll} id="postroll"/>{' '}
                postroll
                </Label>
              </FormGroup>

              <Label for="linearAdvApplication">linearAdvApplication</Label>
              <Input required onChange={this.onChange} value={this.state.linearAdvApplication} type="text"
                  name="linearAdvApplication" id="linearAdvApplication" placeholder="linearAdvApplication" />
            </FormGroup>

            <FormGroup name="linearAdvDemoConfig"> 
              <FormGroup name="cornerBanner"> 
                <Label for="cornerBannerCampaignId">cornerBanner CampaignId</Label>
                <Input required onChange={this.onChange} value={this.state.cornerBannerCampaignId} type="number"
                  name="cornerBannerCampaignId" id="cornerBannerCampaignId" placeholder="cornerBannerCampaignId" />

                <Label for="cornerBannerStreamEvent">cornerBannerStreamEvent</Label>
                <Input required onChange={this.onChange} value={this.state.cornerBannerStreamEvent} type="text"
                  name="cornerBannerStreamEvent" id="cornerBannerStreamEvent" placeholder="cornerBannerStreamEvent" />
              </FormGroup>
              <FormGroup name="lshapeBanner"> 
                <Label for="lsShapeBannerCampaignId">lsShapeBannerCampaignId</Label>
                <Input required onChange={this.onChange} value={this.state.lsShapeBannerCampaignId} type="number"
                  name="lsShapeBannerCampaignId" id="lsShapeBannerCampaignId" placeholder="lsShapeBannerCampaignId" />

                <Label for="lsShapeBannerStreamEvent">lsShapeBannerStreamEvent</Label>
                <Input required onChange={this.onChange} value={this.state.lsShapeBannerStreamEvent} type="text"
                  name="lsShapeBannerStreamEvent" id="lsShapeBannerStreamEvent" placeholder="lsShapeBannerStreamEvent" />
              </FormGroup>
              <FormGroup name="stripeBanner"> 
                <Label for="stripeBannerCampaignId">stripeBannerCampaignId</Label>
                <Input required onChange={this.onChange} value={this.state.stripeBannerCampaignId} type="number"
                  name="stripeBannerCampaignId" id="stripeBannerCampaignId" placeholder="stripeBannerCampaignId" />

                <Label for="stripeBannerStreamEvent">stripeBannerStreamEvent</Label>
                <Input required onChange={this.onChange} value={this.state.stripeBannerStreamEvent} type="text"
                  name="stripeBannerStreamEvent" id="stripeBannerStreamEvent" placeholder="stripeBannerStreamEvent" />
              </FormGroup>
            </FormGroup>

          </FormGroup>
          <Button> Submit </Button>
        </Form>
      </Container>
    );
  }
}
