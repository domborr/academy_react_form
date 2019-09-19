import React from "react";
import { CustomInput, Container, Button, Form, FormGroup, Label, Input, Row, Col } from "reactstrap";
import { User } from "../Models/User";
import Services from "../Services/Services";
import { t } from 'ttag'
import AppSettingsModel, { Banner, AppSettings } from "../Models/AppSettingsModel"
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
      <Container>
        <Form onSubmit={this.onSubmit}>

          <FormGroup style={{ border: "thin solid lightgrey", borderRadius: "10px", padding: "2%", margin: "2%" }}>
            <Row>
              <Col>
                <Label for="base_url">Base_url</Label>
                <Input required onChange={this.onChange} value={this.state.base_url} type="text"
                  name="base_url" id="base_url" placeholder="base_url" />
              </Col>
              <Col>
                <Label for="pages_path">Pages_path</Label>
                <Input required onChange={this.onChange} value={this.state.pages_path} type="text"
                  name="pages_path" id="pages_path" placeholder="pages_path" />
              </Col>
            </Row>
            <Row>
              <Col>
                <Label for="layout_path">Layout_path</Label>
                <Input required onChange={this.onChange} value={this.state.layout_path} type="text"
                  name="layout_path" id="layout_path" placeholder="layout_path" />
              </Col>
              <Col>
                <Label for="nalaucher_pathme">Laucher_path</Label>
                <Input required onChange={this.onChange} value={this.state.laucher_path} type="text"
                  name="laucher_path" id="laucher_path" placeholder="laucher_path" />
              </Col>
            </Row>
            <Row>
              <Col>
                <Label for="events_path">Events_path</Label>
                <Input required onChange={this.onChange} value={this.state.events_path} type="text"
                  name="events_path" id="events_path" placeholder="events_path" />
              </Col>
              <Col></Col>
            </Row>
            <br />
          </FormGroup>

          <FormGroup>
            <FormGroup name="platform" style={{ border: "thin solid lightgrey", borderRadius: "10px", padding: "2%", margin: "2%" }}>
              <h3> Platform </h3>
              <br />
              <Row>
                <Col>
                  <Label for="epg">epg</Label>
                  <Input required onChange={this.onChange} value={this.state.epg} type="text"
                    name="epg" id="epg" placeholder="epg" />
                </Col>
                <Col>
                  <Label for="vod">vod</Label>
                  <Input required onChange={this.onChange} value={this.state.vod} type="text"
                    name="vod" id="vod" placeholder="vod" />
                </Col>
              </Row>
              <Row>
                <Col>
                  <Label for="linearAdv">linearADV</Label>
                  <Input required onChange={this.onChange} value={this.state.linearAdv} type="text"
                    name="linearAdv" id="linearAdv" placeholder="linearAdv" />
                </Col>
                <Col>
                  <Label for="videoADV">videoADV</Label>
                  <Input required onChange={this.onChange} value={this.state.videoADV} type="text"
                    name="videoADV" id="videoADV" placeholder="videoADV" />
                </Col>
              </Row>
              <br />
            </FormGroup>

            <FormGroup name="hbbtv_configuration" style={{ border: "thin solid lightgrey", borderRadius: "10px", padding: "2%", margin: "2%" }}>
              <h3>Hbbtv config</h3>
              <br />
              <Row>
                <Col>
                  <Label for="broadcastVideoElement">broadcastVideoElement</Label>
                  <Input required onChange={this.onChange} value={this.state.broadcastVideoElement} type="text"
                    name="broadcastVideoElement" id="broadcastVideoElement" placeholder="broadcastVideoElement" />
                </Col>
                <Col>
                  <Label for="carouselID">carouselID</Label>
                  <Input required onChange={this.onChange} value={this.state.carouselID} type="number"
                    name="carouselID" id="carouselID" placeholder="carouselID" />
                </Col>
              </Row>
              <Row>
                <Col>
                  <Label for="streamEventObject">streamEventObject</Label>
                  <Input required onChange={this.onChange} value={this.state.streamEventObject} type="text"
                    name="streamEventObject" id="streamEventObject" placeholder="streamEventObject" />
                </Col>
                <Col></Col>
              </Row>
            </FormGroup>

            <FormGroup name="defaults" style={{ border: "thin solid lightgrey", borderRadius: "10px", padding: "2%", margin: "2%" }}>
              <h3> Defaults </h3>
              <Row>
                <Col>
                  <Label for="lancher">lancher</Label>
                  <Input required onChange={this.onChange} value={this.state.lancher} type="text"
                    name="lancher" id="lancher" placeholder="lancher" />
                </Col>
                <Col>
                  <Label for="events">events</Label>
                  <Input required onChange={this.onChange} value={this.state.events} type="text"
                    name="events" id="events" placeholder="events" />
                </Col>
              </Row>
            </FormGroup>

            <FormGroup style={{ border: "thin solid lightgrey", borderRadius: "10px", padding: "2%", margin: "2%" }}>
              <h3>Advertising configuration</h3>
              <FormGroup name="advertising_configuration" style={{ border: "thin solid white", borderRadius: "10px", padding: "0%", margin: "0%" }}>
                <Row style={{ margin: "2% 0.65%" }}>
                  <Col>
                    <FormGroup>
                      <Label for="linearAdvEnabled" check>
                        <Input type="checkbox" onChange={this.onCheckboxChange} name="linearAdvEnabled"
                          checked={this.state.linearAdvEnabled} id="linearAdvEnabled" />{' '}
                        linearAdvEnabled
                </Label>
                    </FormGroup>
                  </Col>
                  <Col>
                    <FormGroup>
                      <Label for="videoAdvEnabled" check>
                        <Input type="checkbox" onChange={this.onCheckboxChange} name="videoAdvEnabled"
                          checked={this.state.videoAdvEnabled} id="videoAdvEnabled" />{' '}
                        videoAdvEnabled
                </Label>
                    </FormGroup>
                  </Col>
                  <Col>
                    <FormGroup>
                      <Label for="preroll" check>
                        <Input type="checkbox" onChange={this.onCheckboxChange} name="preroll"
                          checked={this.state.preroll} id="preroll" />{' '}
                        preroll
                </Label>
                    </FormGroup>
                  </Col>
                  <Col>
                    <FormGroup>
                      <Label for="midroll" check>
                        <Input type="checkbox" onChange={this.onCheckboxChange} name="midroll"
                          checked={this.state.midroll} id="midroll" />{' '}
                        midroll
                </Label>
                    </FormGroup>
                  </Col>
                  <Col>
                    <FormGroup>
                      <Label for="postroll" check>
                        <Input type="checkbox" onChange={this.onCheckboxChange} name="postroll"
                          checked={this.state.postroll} id="postroll" />{' '}
                        postroll
                </Label>
                    </FormGroup>
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <Label for="linearAdvApplication">linearAdvApplication</Label>
                    <Input required onChange={this.onChange} value={this.state.linearAdvApplication} type="text"
                      name="linearAdvApplication" id="linearAdvApplication" placeholder="linearAdvApplication" />
                  </Col>
                </Row>
              </FormGroup>
              <br />
              <br />
              <h5> LinearADV DemoConfig</h5>
              <br />
              <FormGroup name="linearAdvDemoConfig" >
                <FormGroup name="cornerBanner" style={{ border: "thin solid lightgrey", borderRadius: "10px", padding: "2%", margin: "%" }}>
                  <Label for="cornerBannerCampaignId">cornerBanner CampaignId</Label>
                  <Input required onChange={this.onChange} value={this.state.cornerBannerCampaignId} type="number"
                    name="cornerBannerCampaignId" id="cornerBannerCampaignId" placeholder="cornerBannerCampaignId" />

                  <Label for="cornerBannerStreamEvent">cornerBannerStreamEvent</Label>
                  <Input required onChange={this.onChange} value={this.state.cornerBannerStreamEvent} type="text"
                    name="cornerBannerStreamEvent" id="cornerBannerStreamEvent" placeholder="cornerBannerStreamEvent" />
                </FormGroup>
                <FormGroup name="lshapeBanner" style={{ border: "thin solid lightgrey", borderRadius: "10px", padding: "2%", margin: "%" }}>
                  <Label for="lsShapeBannerCampaignId">lsShapeBannerCampaignId</Label>
                  <Input required onChange={this.onChange} value={this.state.lsShapeBannerCampaignId} type="number"
                    name="lsShapeBannerCampaignId" id="lsShapeBannerCampaignId" placeholder="lsShapeBannerCampaignId" />

                  <Label for="lsShapeBannerStreamEvent">lsShapeBannerStreamEvent</Label>
                  <Input required onChange={this.onChange} value={this.state.lsShapeBannerStreamEvent} type="text"
                    name="lsShapeBannerStreamEvent" id="lsShapeBannerStreamEvent" placeholder="lsShapeBannerStreamEvent" />
                </FormGroup>
                <FormGroup name="stripeBanner" style={{ border: "thin solid lightgrey", borderRadius: "10px", padding: "2%", margin: "%" }}>
                  <Label for="stripeBannerCampaignId">stripeBannerCampaignId</Label>
                  <Input required onChange={this.onChange} value={this.state.stripeBannerCampaignId} type="number"
                    name="stripeBannerCampaignId" id="stripeBannerCampaignId" placeholder="stripeBannerCampaignId" />

                  <Label for="stripeBannerStreamEvent">stripeBannerStreamEvent</Label>
                  <Input required onChange={this.onChange} value={this.state.stripeBannerStreamEvent} type="text"
                    name="stripeBannerStreamEvent" id="stripeBannerStreamEvent" placeholder="stripeBannerStreamEvent" />
                </FormGroup>
              </FormGroup>
            </FormGroup>
          </FormGroup>
          <Button style = {{padding:"2% 10%", margin:"2%", borderRadius:"10px"}}> <strong> SUBMIT </strong></Button>
        </Form>
      </Container>
    );
  }
}
