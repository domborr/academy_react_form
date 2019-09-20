import React, { Component } from "react";
import { render } from "react-dom";
import Services from "../Services/Services";
import Form from "react-jsonschema-form";

export default function FormGeneratorCustom( ) {
let service = new Services();

const schemaBase = {
  title: "App Settings",
  type: "object",
  required: ["base_url"],
  properties: {
    base_url: {type: "string", title: "Base_url", default: "Base URL"},
    pages_path: {type: "string", title: "Pages_Path", default: "Pages Path"},
    layout_path: {type: "string", title: "Layout_Path", default: "Layout Path"},
    events_path: {type: "string", title: "Events_Path", default: "Events Path"},
    laucher_path: {type: "string", title: "Laucher_Path", default: "Laucher Path"},
    AdvertisingConfigurationSchema:{
      title: "Advertising Configuration",
      type:"object",
      required:[],
      properties:{
      linearAdvEnabled: {type: "boolean", title: "LinearADVEnabled", default: false},
      videoAdvEnabled: {type: "boolean", title: "VideoAdvEnabled", default: false},
      preroll: {type: "boolean", title: "preroll", default: false},
      midroll: {type: "boolean", title: "midroll", default: false},
      postroll: {type: "boolean", title: "postroll", default: false}
    }}
  }
    
};
// onSubmit = event => {
//   event.preventDefault();
//   let appsettingsmodel = this.state;
//   console.log(appsettingsmodel);
//   this.service.exportToJson(JSON.stringify(appsettingsmodel));
// };
const log = (type) => console.log.bind(console, type);
const onSubmit= ({formData,e})=>{
  
  service.exportToJson(JSON.stringify(formData))};

return (
  <Form schema={schemaBase}
  
        onSubmit={onSubmit}
        onError={log("errors")} />
  )
} 

function Accazzo(){
  console.log("Ciao");
}