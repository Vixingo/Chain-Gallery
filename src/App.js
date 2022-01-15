import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/jquery/dist/jquery.min.js";

import "./css/Landingpage.css";
import Landingpage from "./Landingpage";
import { Route, Link, HashRouter } from "react-router-dom";
import Userproflie from "./Userproflie";
import Singleart from "./Singleart";
import "./css/responsive.css";
import GalleryPage from "./GalleryPage";
import MarketPage from "./MarketPage";
import ActivityPage from "./ActivityPage";
import SignInPage from "./SignInPage";
import HomePage from "./HomePage";
import Register from "./Register";
import Home_login from "./Home_login";
import Dashboard from "./Dashboard";
import SettingPage from "./SettingPage";
import Sell_artwork_page from "./Sell_artwork_page";

function App() {
    return (
        <HashRouter>
            <>
                <Route exact path="/" component={HomePage} />
                <Route
                    exact
                    path="/sell_your_artwork"
                    component={Sell_artwork_page}
                />
                <Route exact path="/Userproflie" component={Userproflie} />
                <Route exact path="/Singleart" component={Singleart} />
                <Route exact path="/Gallery" component={GalleryPage} />
                <Route exact path="/Market" component={MarketPage} />
                <Route exact path="/Activity" component={ActivityPage} />
                <Route exact path="/Sign_in" component={SignInPage} />
                <Route exact path="/Register" component={Register} />
                <Route exact path="/Home_login" component={Home_login} />
                <Route exact path="/Dashboard" component={Dashboard} />
                <Route exact path="/Setting" component={SettingPage} />
            </>
        </HashRouter>
    );
}

export default App;
