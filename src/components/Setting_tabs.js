import { useState } from "react";
import "../css/Setting_tabs.css"
import Basic_info from "./Basic_info";
import ConnectSocial from "./ConnectSocial";
import EmailPassword from "./EmailPassword";
import Setting_Notification from "./Setting_Notification";
import Setting_Wallet from "./Setting_Wallet";
import Social_link from "./Social_link";
function Setting_tabs() {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    return (
<section className="bg-white pt-5 ">
    <div className="container p-sm-5">
        <div className="row">
            <div className="col-md-3">
            <h5 className="mb-4">Settings</h5>
                <div className="setting_holder mb-5">

                    <div className="setting_tabs">
                        <button className={ toggleState === 1 ? "set_tabs active-setting-tabs" : "set_tabs"}
                            onClick={() => toggleTab(1)}> Profile
                        </button>
                        
                        <button
                            className={ toggleState === 2 ? "set_tabs active-setting-tabs" : "set_tabs"}
                            onClick={() => toggleTab(2)}> Account
                        </button>
                        <button
                            className={ toggleState === 3 ? "set_tabs active-setting-tabs" : "set_tabs"}
                            onClick={() => toggleTab(3)}> Wallet
                        </button>
                        <button
                            className={ toggleState === 4 ? "set_tabs active-setting-tabs" : "set_tabs"}
                            onClick={() => toggleTab(4)}> Notifications
                        </button>
                    </div>
                </div>
            </div>

            <div className="col-md-9">
            <div className="content-tabs">
                    <div className={
                            toggleState === 1
                                ? "setting-content  active-setting-content"
                                : "setting-content"}>
                        <Basic_info/>
                    
                        <Social_link/>
                
                        
                    </div>

                    <div className={
                            toggleState === 2
                                ? "setting-content  active-setting-content"
                                : "setting-content" }>
                            <EmailPassword/>
                         
                            <ConnectSocial/>
                        
                    </div>
                    <div className={
                            toggleState === 3
                                ? "setting-content  active-setting-content"
                                : "setting-content" }>
                        <Setting_Wallet/>
                    </div>
                    <div className={
                            toggleState === 4
                                ? "setting-content  active-setting-content"
                                : "setting-content" }>
                       <Setting_Notification/>
                    </div>
                </div>
            </div>
</div>
            </div>
        </section>
    );
}

export default Setting_tabs
