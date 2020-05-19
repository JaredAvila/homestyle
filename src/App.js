import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";

import Landing from "./containers/Landing/Landing";
import Auth from "./containers/Auth/Auth";
import Footer from "./components/Footer/Footer";
import Navigation from "./containers/Navigation/Navigation";
import Home from "./containers/Home/Home";
import Activities from "./containers/Activities/Activities";
import Activity from "./components/Activity/Activity";
import Completed from "./components/Completed/Completed";
import AddChild from "./components/AddChild/AddChild";
import Confirm from "./components/Confirm/Confirm";
import Register from "./containers/Register/Register";
import Account from "./containers/Account/Account";
import EditAccount from "./components/EditAccount/EditAccount";

const App = () => {
  return (
    <Fragment>
      <Navigation />
      <div style={{ paddingTop: "50px" }}>
        <Switch>
          <Route path="/" exact component={Landing} />
          <Route path="/auth" component={Auth} />
          <Route path="/register" exact component={Register} />
          <Route path="/register/add_child" component={AddChild} />
          <Route path="/register/confirm" component={Confirm} />
          <Route path="/home" component={Home} />
          <Route path="/activities" exact component={Activities} />
          <Route path="/activities/activity" component={Activity} />
          <Route path="/activities/complete" component={Completed} />
          <Route path="/account" exact component={Account} />
          <Route path="/account/edit" component={EditAccount} />
        </Switch>
      </div>

      <Footer />
    </Fragment>
  );
};

export default App;
