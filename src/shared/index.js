import React from "react";
import { Switch, Route } from "react-router-dom";
import routes from "./routes";

export default () => {
    return (
        <Switch>
            {routes.map((route, i) => <Route key={i} {...route} />)}
        </Switch>
    );
};