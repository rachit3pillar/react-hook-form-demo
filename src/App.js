import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ClassForm from "./Components/classForm";
import HookForm from "./Components/hookForm";
import ReactHookForm from "./Components/ReactHookForm";
import ReactHookFormApi from "./Components/ReactHookFormApi";

export default function App() {
  return (
    <Router>
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/react-hook-form-api">
            <ReactHookFormApi />
          </Route>
          <Route path="/react-hook-form">
            <ReactHookForm />
          </Route>
          <Route path="/hook-form">
            <HookForm />
          </Route>
          <Route path="/">
            <ClassForm />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
