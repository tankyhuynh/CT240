const errorBoxShow = (content)=>{
    alert(content);
};
const profile = {name: "Lê Thành Nhân"};

class VCallAPI {
    constructor(signal, indexFile = "/index.html") {
        this.signal = signal;
        this.INDEX_FILE = indexFile;
        this.errorBox = {show: errorBoxShow,}
        this.frProfile = profile;
        this.calling = false;
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
        this.calling =true;

        const nWindow = window.open(this.INDEX_FILE, "_blank", "top=0, left=0, height=720, width=480",);
        nWindow.vCall = {};
        nWindow.vCall.signal = signal;
        nWindow.vCall.frProfile = this.frProfile;
        nWindow.onunload = (event)=>{
            console.log(event)
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
        const nWindow = this.createView();
        nWindow.vCall.from = from;
    }

}

