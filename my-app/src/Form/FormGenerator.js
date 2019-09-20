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
    platform:{
      title:"Platform",
      type:"object",
      required:[],
      properties:{
        epg: {type: "string", title: "epg", default: "Epg"},
        vod: {type: "string", title: "vod", default: "vod"},
        linearADV: {type: "string", title: "linearADV", default: "linearADV"},
        videoADV: {type: "string", title: "videoADV", default: "videoADV"},
      }
    },
    hbbtv_configuration:{
      title:"Hbbtv Configuration",
      type: "object",
      required:[],
      properties:{
        broadcastVideoElement: {type: "string", title: "broadcastVideoElement", default: "broadcastVideoElement"},
        carouselID: {type: "number", title: "carouselID", default: "carouselID"},
        streamEventObject: {type: "string", title: "streamEventObject", default: "streamEventObject"},
      }
    },
    defaults:{
      title: "Defaults",
      type:"object",
      required: [],
      properties:{
        lancher: {type: "string", title: "lancher", default: "lancher"},
        events: {type: "string", title: "events", default: "events"}
      }
    },
    advertisingConfigurationSchema:{
      title: "Advertising Configuration",
      type:"object",
      required:[],
      properties:{
      linearAdvEnabled: {type: "boolean", title: "LinearADVEnabled", default: false},
      videoAdvEnabled: {type: "boolean", title: "VideoAdvEnabled", default: false},
      preroll: {type: "boolean", title: "preroll", default: false},
      midroll: {type: "boolean", title: "midroll", default: false},
      postroll: {type: "boolean", title: "postroll", default: false},
      linearAdvApplication: {type: "string", title: "linearAdvApplication", default: "linearAdvApplication"},
      linearAdvDemoConfig:{
        title:"Linear Adv Demo Config",
        type:"object",
        required:[],
        properties:{
          cornerBanner:{
            title:"Corner Banner",
            type: "object",
            required:[],
            properties:{
              campaignId: {type: "string", title: "campaignId", default: "campaignId"},
              streamEvent: {type: "string", title: "streamEvent", default: "streamEvent"}
            }

          },
          lsShapeBanner:{
            title:"Ls Shape Banner",
            type: "object",
            required:[],
            properties:{
              campaignId: {type: "string", title: "campaignId", default: "campaignId"},
              streamEvent: {type: "string", title: "streamEvent", default: "streamEvent"}
            }

          },
          stripeBanner:{
            title:"Stripe Banner",
            type: "object",
            required:[],
            properties:{
              campaignId: {type: "string", title: "campaignId", default: "campaignId"},
              streamEvent: {type: "string", title: "streamEvent", default: "streamEvent"}
            }

          }

        }
      }
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

