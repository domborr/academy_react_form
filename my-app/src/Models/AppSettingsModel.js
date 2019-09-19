export class Banner{
  campaignId;
  streamEvent="";

  constructor (campaignId,streamEvent){
    this.campaignId=campaignId;
    this.streamEvent=streamEvent;
  }
}

export class LinearAdvDemoConfig{
  cornerbanner = new Banner();
  lsShapeBanner = new  Banner();
  stripeBanner = new Banner();

  constructor (cornerbanner,lsShapeBanner,stripeBanner){
    this.cornerbanner = cornerbanner;
    this.lsShapeBanner = lsShapeBanner;
    this.stripeBanner = stripeBanner;
  }
}

export class Advertising_configuration{
  linearAdvEnabled=false;
  videoAdvEnabled=false;
  preroll=false;
  midroll=false;
  postroll=false;
  linearAdvApplication="";
  linearAdvDemoConfig= new LinearAdvDemoConfig();

  constructor(linearAdvEnabled,videoAdvEnabled,preroll,midroll,postroll,linearAdvApplication,linearAdvDemoConfig){
    this.linearAdvEnabled=linearAdvEnabled;
    this.videoAdvEnabled=videoAdvEnabled;
    this.preroll=preroll;
    this.midroll=midroll;
    this.postroll=postroll;
    this.linearAdvApplication=linearAdvApplication;
    this.linearAdvDemoConfig=linearAdvDemoConfig;
  }
}

export class Defaults{
  lancher="";
  events="";
  
  constructor(lancher,events){
    this.lancher=lancher;
    this.events=events;
  }
}

export class Hbbtv_configuration{
  broadcastVideoElement="";
  carouselId;
  streamEventObject="";

  constructor (broadcastVideoElement,carouselId,streamEventObject){
    this.broadcastVideoElement=broadcastVideoElement;
    this.carouselId=carouselId;
    this.streamEventObject=streamEventObject;
  }
}

export class Platform{
  epg="";
  vod="";
  linearAdv="";
  videoAdv="";

  constructor (epg, vod, linearAdv,videoAdv){
    this.epg= epg;
    this.vod=vod;
    this.linearAdv=linearAdv;
    this.videoAdv=videoAdv;
  }
}

            
export class AppSettings {
  base_url="";
  pages_path="";
  layout_path="";
  events_path="";
  platform = new Platform();
  hbbtv_configuration = new Hbbtv_configuration();
  defaults= new Defaults();
  advertising_configuration = new Advertising_configuration();
}








