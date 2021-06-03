const errorBoxShow = (content)=>{
  alert(content);
};
const profile = {name: "Lê Thành Nhân"};

export class VCallAPI {

  signal: any;
  indexFile: any = "/video-call.html";
  errorBox = {show: errorBoxShow,}
  frProfile = profile;
  calling = false;

  constructor(signal: any, index: string) {
      this.signal = signal;
      this.indexFile = index;
  };
  /**
   * @param {Object} config
   */
  setErrorBox(config){
      this.errorBox = config;
  }
  /**
   * @param {Object} config
   */
  setGetProfile(config){
      this.frProfile = config;
  }
  /**
   *
   */
  createView(){
      if(this.calling) { this.errorBox.show("Only one call"); return;}
      this.calling =false;

      const nWindow:any = window.open(this.indexFile, "_blank", "top=0, left=0, height=720, width=480",);
      nWindow.vCall = {};
    //   console.log("vcall");
    //   console.log(nWindow.vCall);
      nWindow.vCall.signal = this.signal;
    //   console.log('signal');
    //   console.log(this.signal);
      nWindow.vCall.frProfile = this.frProfile;
      nWindow.onunload = (event)=>{
        //   console.log(event)
          this.calling = false;
      }
      return nWindow;
  }
  /**
   * @param {string} to  - Indentify of receiver
   */
  createCallView(to) {
      const nWindow = this.createView();
      nWindow.vCall.to = to;
  }
  /**
   * @param {string} from - Indentify of sender
   */
  createReceiveView(from) {
    // console.log(`from: ${from}`);
      const nWindow = this.createView();
      nWindow.vCall.from = from;
  }

}

